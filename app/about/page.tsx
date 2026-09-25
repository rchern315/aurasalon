import Link from "next/link";
import { images } from "../data";

export default function AboutPage() {
  return (
    <>
      <section className="page-intro"><div className="shell"><p className="eyebrow">About Aura</p><h1>Your hair home<br />in Reno.</h1><p className="lede">Established in Reno in 2004 and owned by Jennifer Utu since 2014, Aura is an Aveda salon built around positive culture, creativity and a welcoming guest experience.</p></div></section>
      <section className="editorial-split">
        <div className="editorial-photo" style={{ backgroundImage: `url("${images.arches}")` }} />
        <div className="editorial-copy"><p className="eyebrow">Our Salon</p><h2>Warm, modern and unmistakably Aura.</h2><p>Aura combines a clean, modern salon environment with the easygoing energy of a neighborhood favorite. The goal is simple: make every guest feel comfortable, heard and excited about their hair.</p></div>
      </section>
      <section className="section shell about-links">
        <div className="contact-card">
          <p className="eyebrow">Guest Information</p>
          <h2>Salon Policies</h2>
          <p>Review appointment, payment, return and gift card policies before your visit.</p>
          <Link className="text-link" href="/about/policies">View Policies →</Link>
        </div>
      </section>
    </>
  );
}
