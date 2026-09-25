import Link from "next/link";
import { bookingUrl, images } from "./data";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-image" style={{ backgroundImage: `url("${images.hero}")` }} />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">An Aveda Salon</p>
          <h1>Beauty<br />with Purpose</h1>
          <p className="hero-kicker">Expert care. Aveda values.<br />A more beautiful you.</p>
          <div className="button-row">
            <a className="button button-primary" href={bookingUrl}>Book Appointment <span>→</span></a>
            <Link className="button button-light" href="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div className="image-panel" style={{ backgroundImage: `url("${images.storefront}")` }} />
        <div className="feature-copy">
          <p className="eyebrow">Aura Salon · Reno</p>
          <h2>An Elevated<br />Salon Experience</h2>
          <p>
            Aura Salon has been part of Reno since 2004. We pair personalized
            service with Aveda hair care, thoughtful consultation and a relaxed,
            welcoming atmosphere.
          </p>
          <Link className="button button-ghost" href="/about">Our Story <span>→</span></Link>
        </div>
        <div className="image-panel" style={{ backgroundImage: `url("${images.franktown}")` }} />
      </section>

      <section className="value-strip">
        <div><span className="line-icon">◒</span><h3>Aveda Products</h3><p>High-performance, plant-powered hair care and styling.</p></div>
        <div><span className="line-icon">✂</span><h3>Expert Stylists</h3><p>Personalized services designed around your hair and lifestyle.</p></div>
        <div><span className="line-icon">♡</span><h3>Conscious Beauty</h3><p>Beauty that cares for you and the world around us.</p></div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Our Services</p><h2>Beautiful Hair.<br />Made Personal.</h2></div>
          <p>From precision cuts and dimensional color to restorative treatments and polished styling.</p>
        </div>
        <div className="service-cards">
          {[
            ["Cuts & Styling", "Shape, movement and a finish that fits real life."],
            ["Color", "Dimensional color, highlights, lived-in tones and transformations."],
            ["Treatments", "Targeted care to strengthen, soften and restore."],
            ["Special Occasion", "Styling for celebrations, events and unforgettable days."]
          ].map(([title, copy], index) => (
            <article className="service-card" key={title}>
              <div className={`service-photo service-photo-${index + 1}`} />
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="center"><Link className="button button-primary" href="/services">View All Services</Link></div>
      </section>

      <section className="aveda-band">
        <div className="shell aveda-band-grid">
          <div>
            <p className="eyebrow">The Aveda Experience</p>
            <h2>Pure Beauty.<br />A Brighter Tomorrow.</h2>
            <p>Discover professional hair care inspired by nature and built for high performance.</p>
            <Link className="button button-primary" href="/aveda">Discover Aveda</Link>
          </div>
          <div className="aveda-image" style={{ backgroundImage: `url("${images.retail}")` }} />
        </div>
      </section>

      <section className="cta-banner">
        <div className="shell cta-inner">
          <div><p className="eyebrow">Ready when you are</p><h2>Your next great hair day starts here.</h2></div>
          <a className="button button-light" href={bookingUrl}>Book Appointment <span>→</span></a>
        </div>
      </section>
    </>
  );
}
