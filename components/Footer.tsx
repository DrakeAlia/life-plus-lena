"use client";

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function Footer() {
  return (
    <footer className="lpl-foot lpl-pad">
      <div className="lpl-foot-cols">
        <div className="col">
          <div className="lpl-eyebrow">Studio</div>
          <span>Lena Glennon</span>
          <a href="tel:+14254951373">(425) 495-1373</a>
          <a href="mailto:lifepluslena@gmail.com">lifepluslena@gmail.com</a>
          <span>By appointment</span>
        </div>
        <div className="col">
          <div className="lpl-eyebrow">Explore</div>
          {["Philosophy", "Services", "Portfolio", "Contact"].map((n) => (
            <a key={n} href={`#${slug(n)}`}>{n}</a>
          ))}
        </div>
        <div className="col">
          <div className="lpl-eyebrow">Serving</div>
          <span>Scottsdale · Paradise Valley</span>
          <span>Cave Creek · Carefree</span>
          <span>Phoenix &amp; the East Valley</span>
        </div>
      </div>
      <div className="lpl-rule">
        <span>© {new Date().getFullYear()} Life Plus Lena</span>
        <span>Designing life from the inside out</span>
      </div>
    </footer>
  );
}
