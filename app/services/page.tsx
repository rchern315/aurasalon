import { bookingUrl, services, images } from "../data";

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
            <div className="price-row" key={name}>
              <span>{name}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>

        <p className="small-note">
          Prices may vary based on hair length, condition, service requirements and individual stylist.
        </p>

        <div className="center">
          <a className="button button-primary" href={bookingUrl}>Book Appointment</a>
        </div>
      </section>

      <section className="offers-section">
        <div className="shell">
          <div className="section-heading offers-heading">
            <div>
              <p className="eyebrow">Special Offers</p>
              <h2>More Reasons<br />to Visit Aura.</h2>
            </div>
            <p>
              Whether you&apos;re new to Aura or sharing the salon with a friend,
              enjoy a little something extra on your next service.
            </p>
          </div>

          <div className="offer-grid">
            <article className="offer-card">
              <div
                className="offer-image"
                style={{ backgroundImage: `url("${images.salonWide2}")` }}
              >
                <div className="offer-badge">
                  <span>New Guest Offer</span>
                  <strong>Save $10<br />Off Your<br />Next Service*</strong>
                </div>
              </div>
              <div className="offer-body">
                <h3>Exclusive Offer for New Guests</h3>
                <p>
                  New to Aura Salon? Enjoy $10 off your next hair service with a participating stylist.
                </p>
                <a className="button button-primary" href={bookingUrl}>Book Your First Visit</a>
                <p className="offer-terms">
                  *Not valid with other promotions. No cash value. Valid with participating stylists.
                  Cannot be used toward purchase of products; only toward hair services.
                </p>
              </div>
            </article>

            <article className="offer-card">
              <div className="offer-referral-visual">
                <div className="offer-referral-copy">
                  <span>Referral Offer</span>
                  <strong>Save 20%<br />Off Your<br />Next Service*</strong>
                </div>
              </div>
              <div className="offer-body">
                <h3>A Referral is the Best Compliment</h3>
                <p>
                  Refer a friend to Aura and enjoy 20% off your next hair service with a participating stylist.
                </p>
                <a className="button button-primary" href={bookingUrl}>Book Your Next Visit</a>
                <p className="offer-terms">
                  *Not valid with other promotions. No cash value. Valid with participating stylists.
                  Cannot be used toward purchase of products; only toward hair services.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
