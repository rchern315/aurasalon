import { bookingUrl } from "../data";

export default function ContactPage() {
  return (
    <>
      <section className="page-intro"><div className="shell"><p className="eyebrow">Aura Salon</p><h1>Visit Us</h1><p className="lede">Inside Franktown Corners in Reno, Nevada.</p></div></section>
      <section className="section shell contact-grid">
        <div className="contact-card">
          <h2>Location</h2><p>2303 Kietzke Lane, Suite #11<br />Reno, NV 89502</p><a href="tel:7758263117">(775) 826-3117</a>
        </div>
        <div className="contact-card">
          <h2>Hours</h2><p>Monday – Friday<br />10:00 am – 6:00 pm</p><p>Saturday<br />9:00 am – 5:00 pm</p><p>Sunday · Closed</p>
        </div>
        <div className="contact-card">
          <h2>Appointments</h2><p>Ready to reserve your next visit?</p><a className="button button-primary" href={bookingUrl}>Book Online</a>
        </div>
      </section>
    </>
  );
}
