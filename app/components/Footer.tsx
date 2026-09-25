import Link from "next/link";

const bookingUrl =
  "https://online-booking.salonbiz.com/olb/web_booking.home?p_mobile=y&p_start=1&theme=1234&wbid=c1454t201505041904p3Ay8iJ843mrN7zrx6563";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-word">AURA</span>
            <span className="brand-leaf" aria-hidden="true" />
            <span className="brand-sub">AN AVEDA SALON</span>
          </Link>
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
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-cta">
          <a className="button button-outline" href={bookingUrl}>Book Appointment</a>
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} Aura Salon · Reno, Nevada</div>
    </footer>
  );
}
