import Link from "next/link";

const bookingUrl =
  "https://online-booking.salonbiz.com/olb/web_booking.home?p_mobile=y&p_start=1&theme=1234&wbid=c1454t201505041904p3Ay8iJ843mrN7zrx6563";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-column">
          <Link className="brand footer-brand" href="/" aria-label="Aura Salon home">
            <span className="brand-word">AURA</span>
            <span className="brand-hair">HAIR SALON</span>
            <span className="brand-leaf" aria-hidden="true" />
            <span className="brand-sub">AVEDA SALON</span>
          </Link>

          <div className="social-links" aria-label="Aura Salon social media">
            <a
              className="social-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Aura Salon on Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-9h3l.45-3.5H13.5V7.25c0-1.01.28-1.7 1.75-1.7H17V2.42A23.4 23.4 0 0 0 14.45 2C11.92 2 10.2 3.54 10.2 6.37V9.5H7.35V13h2.85v9h3.3Z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Aura Salon on Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.4" cy="6.7" r="1" className="instagram-dot" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2>Visit Us</h2>
          <p>2303 Kietzke Lane, Suite #11<br />Reno, NV 89502<br />Inside Franktown Corners</p>
          <a href="tel:7758263117">(775) 826-3117</a>
        </div>

        <div>
          <h2>Hours</h2>
          <p>Monday – Friday<br />10:00 am – 6:00 pm</p>
          <p>Saturday<br />9:00 am – 5:00 pm</p>
          <p>Sunday · Closed</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/aveda">Aveda</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/about">About</Link>
            <Link href="/about/policies">Policies</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-cta">
          <a className="button button-outline" href={bookingUrl}>Book Appointment</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        © {new Date().getFullYear()} Aura Salon · Reno, Nevada
      </div>
    </footer>
  );
}
