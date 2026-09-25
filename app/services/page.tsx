import { bookingUrl, services } from "../data";

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Aura Salon</p>
          <h1>Services</h1>
          <p className="lede">Thoughtful consultation, personalized hair care and pricing that is easy to understand.</p>
        </div>
      </section>
      <section className="section shell">
        <div className="price-grid">
          {services.map(([name, price]) => (
            <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>
          ))}
        </div>
        <p className="small-note">Prices may vary based on hair length, condition, service requirements and individual stylist.</p>
        <div className="center"><a className="button button-primary" href={bookingUrl}>Book Appointment</a></div>
      </section>
    </>
  );
}
