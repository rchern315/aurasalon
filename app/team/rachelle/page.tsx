import Link from "next/link";
import { bookingUrl } from "../../data";

export default function RachellePage() {
  return (
    <section className="stylist-page">
      <div className="shell stylist-layout">
        <div className="stylist-portrait-photo">
          <img src="/team/rachelle.jpg" alt="Rachelle" />
        </div>
        <div className="stylist-copy">
          <p className="eyebrow">Stylist</p>
          <h1>Rachelle</h1>
          <p>
            Rachelle brings personalized care, creativity and a love of helping guests
            feel confident in hair that works beautifully for them.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={bookingUrl}>Book with Rachelle</a>
            <Link className="button button-ghost" href="/team">Back to Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
