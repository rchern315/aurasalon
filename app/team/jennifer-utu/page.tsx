import Link from "next/link";
import { bookingUrl } from "../../data";

export default function JenniferUtuPage() {
  return (
    <section className="stylist-page">
      <div className="shell stylist-layout">
        <div className="stylist-portrait-photo"><img src="/team/jennifer.jpg" alt="Jennifer Utu" /></div>
        <div className="stylist-copy">
          <p className="eyebrow">Owner / Stylist</p>
          <h1>Jennifer Utu</h1>
          <p>
            Jennifer Utu has been an Aveda stylist since 2006 and is the owner of Aura Salon.
            She has taken Aveda and Vidal Sassoon classes and believes that the beauty industry
            is ever changing. Continuous education is necessary to set one apart.
          </p>
          <p>
            She really enjoys all levels of hair services, cutting, customizing color, and making
            her guests happy with their experience. She stands by what Aveda believes and truly
            feels that this product line and color line is the best.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={bookingUrl}>Book with Jennifer</a>
            <Link className="button button-ghost" href="/team">Back to Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
