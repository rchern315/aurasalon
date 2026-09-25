import Link from "next/link";

const bookingUrl =
  "https://online-booking.salonbiz.com/olb/web_booking.home?p_mobile=y&p_start=1&theme=1234&wbid=c1454t201505041904p3Ay8iJ843mrN7zrx6563";

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Aura Salon home">
          <span className="brand-word">AURA</span>
          <span className="brand-leaf" aria-hidden="true" />
          <span className="brand-sub">AN AVEDA SALON</span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link>
          <Link href="/aveda">Aveda</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button button-outline header-book" href={bookingUrl}>
          Book Appointment
        </a>
      </div>
    </header>
  );
}
