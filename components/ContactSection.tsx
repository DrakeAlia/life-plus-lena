"use client";

import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, rise } from "@/components/Motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  project: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  note: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "Full-home design",
      timeline: "",
      note: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <section id="contact" className="lpl-contact lpl-pad lpl-sec">
      <div className="lpl-contact-grid">
        <motion.div {...rise} style={{ textAlign: "center" }}>
          <div className="lpl-eyebrow" style={{ color: "rgba(243,238,230,.45)" }}>Contact</div>
          <h2 className="lpl-display" style={{ marginTop: 16 }}>Tell me how you want to live.</h2>
          <p className="lpl-body" style={{ color: "rgba(243,238,230,.66)", marginTop: 22, maxWidth: "58ch", marginLeft: "auto", marginRight: "auto" }}>
            Share a little about your home and I'll reach out to schedule an introductory call.
          </p>
          <div style={{ marginTop: 32 }}>
            <div className="lpl-detail">
              <User size={16} strokeWidth={1.2} />Lena Glennon
            </div>
            <a className="lpl-detail" href="tel:+14254951373">
              <Phone size={16} strokeWidth={1.2} />(425) 495-1373
            </a>
            <a className="lpl-detail" href="mailto:lifepluslena@gmail.com">
              <Mail size={16} strokeWidth={1.2} />lifepluslena@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div {...rise} transition={{ duration: 0.8, delay: 0.12 }}>
          {sent ? (
            <p className="lpl-sent">Thank you — your note is on its way. I'll be in touch to set up a call.</p>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="lpl-row">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="lpl-field">
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            className="lpl-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="lpl-error" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="lpl-field">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            className="lpl-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="lpl-error" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="lpl-row">
                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem className="lpl-field">
                        <FormLabel>Project type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="lpl-input">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Full-home design">Full-home design</SelectItem>
                            <SelectItem value="Room refresh">Room refresh</SelectItem>
                            <SelectItem value="New build">New build</SelectItem>
                            <SelectItem value="Design consultation">Design consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="lpl-error" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem className="lpl-field">
                        <FormLabel>Ideal timeline</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. this fall"
                            className="lpl-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="lpl-error" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem className="lpl-field">
                      <FormLabel>Tell me about your home</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={3}
                          className="lpl-input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="lpl-error" />
                    </FormItem>
                  )}
                />
                <Button variant="linen" type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Spinner className="mr-2" />}
                  Send my inquiry
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
