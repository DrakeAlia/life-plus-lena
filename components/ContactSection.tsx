"use client";

import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { motion, rise } from "@/components/Motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "Full-home design", timeline: "", note: "" });

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
            <div>
              <div className="lpl-row">
                <div className="lpl-field">
                  <Label htmlFor="f-name">Your name</Label>
                  <Input
                    id="f-name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="lpl-input"
                  />
                </div>
                <div className="lpl-field">
                  <Label htmlFor="f-email">Email</Label>
                  <Input
                    id="f-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="lpl-input"
                  />
                </div>
              </div>
              <div className="lpl-row">
                <div className="lpl-field">
                  <Label htmlFor="f-project">Project type</Label>
                  <Select value={form.project} onValueChange={(value) => setForm({ ...form, project: value })}>
                    <SelectTrigger id="f-project" className="lpl-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-home design">Full-home design</SelectItem>
                      <SelectItem value="Room refresh">Room refresh</SelectItem>
                      <SelectItem value="New build">New build</SelectItem>
                      <SelectItem value="Design consultation">Design consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="lpl-field">
                  <Label htmlFor="f-time">Ideal timeline</Label>
                  <Input
                    id="f-time"
                    placeholder="e.g. this fall"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className="lpl-input"
                  />
                </div>
              </div>
              <div className="lpl-field">
                <Label htmlFor="f-note">Tell me about your home</Label>
                <Textarea
                  id="f-note"
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="lpl-input"
                />
              </div>
              <button className="lpl-btn" onClick={() => setSent(true)}>Send my inquiry</button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
