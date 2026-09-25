import Link from "next/link";

export default function PoliciesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">About Aura</p>
          <h1>Policies</h1>
          <p className="lede">
            Our goal is to ensure you completely enjoy your time with us. The following tips
            will help you make the most of your time at Aura Salon.
          </p>
        </div>
      </section>

      <section className="section shell policy-page">
        <div className="policy-copy">
          <h2>Cancellations</h2>
          <p>
            We understand that sometimes you need to change your schedule. We kindly ask that
            you give us 24 hours notice if you must cancel an appointment.
          </p>
          <p>
            We take a credit card to book new clients. If a new client cancels on the day of
            the appointment, we charge 50% of the service. No-call, no-show appointments are
            charged the full service amount.
          </p>

          <h2>Your First Visit</h2>
          <p>
            For your first visit, please arrive 15 minutes prior. This will allow time to fill
            out our contact forms, relax and unwind, and enjoy some Aveda Comforting Tea as you
            settle in.
          </p>

          <h2>Rebooking</h2>
          <p>
            We recommend that you schedule your next appointment prior to leaving Aura Salon
            to ensure you have the day and time that you desire most.
          </p>

          <h2>Parents Please Note</h2>
          <p>
            It is essential to make child care arrangements prior to your appointment so that
            you may enjoy it to the fullest.
          </p>

          <h2>Payment Types</h2>
          <p>
            We accept cash, checks, MasterCard, Visa, Discover and Aura gift cards as payment.
            Gratuities are a sign of a satisfied guest. They are never expected, but are always
            appreciated.
          </p>

          <h2>Returns and Exchanges</h2>
          <p>
            Exchanges are gladly accepted on Aveda products purchased at Aura Salon within
            6 weeks with a receipt. No refunds are given. Services received by Aura Salon
            professionals are non-refundable. However, we will make every effort to achieve
            your specific needs.
          </p>

          <h2>Gift Cards</h2>
          <p>
            Gift cards are purchased at a dollar value. Gift card purchases are redeemable
            for products or services, cannot be redeemed for cash and are not refundable.
            There are no expiration dates, and promotional offers may not be applied to a
            gift card.
          </p>

          <p className="policy-thanks">
            We thank you in advance for allowing us the privilege of taking care of you.
          </p>

          <Link className="button button-ghost" href="/about">Back to About</Link>
        </div>
      </section>
    </>
  );
}
