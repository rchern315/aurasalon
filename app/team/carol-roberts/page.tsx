import Link from "next/link";
import { bookingUrl } from "../../data";

export default function CarolRobertsPage() {
  return (
    <section className="stylist-page">
      <div className="shell stylist-layout">
        <div className="stylist-portrait-photo"><img src="/team/carol.jpg" alt="Carol Roberts" /></div>
        <div className="stylist-copy">
          <p className="eyebrow">Stylist</p>
          <h1>Carol Roberts</h1>
          <p>
            Carol has been a stylist since 2005. Hair has always been her passion since the age
            of 18. Carol loves working with Aveda and our team. She really enjoys making people
            feel good about themselves inside and out.
          </p>
          <p>
            Her fun-loving, relaxed attitude makes her a wonderful addition to the salon. She
            has continued her education with Aveda and Vidal Sassoon to become a stronger and
            more well-rounded stylist. Carol also specializes in hair extensions, perms, and
            vibrant colors.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={bookingUrl}>Book with Carol</a>
            <Link className="button button-ghost" href="/team">Back to Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
