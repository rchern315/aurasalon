import { bookingUrl, images } from "../data";

const team = [
  {
    name: "Jennifer",
    role: "Owner / Stylist",
    bio: "An Aveda stylist since 2006, Jennifer is passionate about continued education, customized color, precision cutting and creating a thoughtful guest experience.",
    href: "https://www.aurasalonnv.com/jennifer"
  },
  {
    name: "Carol",
    role: "Stylist",
    bio: "A stylist since 2005, Carol brings a relaxed, fun energy to the salon and specializes in color, extensions, perms and vibrant looks.",
    href: "https://www.aurasalonnv.com/carol"
  },
  {
    name: "Rachelle",
    role: "Stylist",
    bio: "Rachelle brings personalized care, creativity and a love of helping guests feel confident in hair that works beautifully for them.",
    href: "#"
  },
  {
    name: "Holly",
    role: "Stylist",
    bio: "A stylist since 2003, Holly specializes in texture, curly and wavy hair, alternative styles, extensions, vivids and lived-in color.",
    href: "https://www.aurasalonnv.com/copy-of-jennifer"
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="subhero">
        <div className="subhero-photo" style={{ backgroundImage: `url("${images.salonWide}")` }} />
        <div className="subhero-wash" />
        <div className="shell subhero-copy">
          <p className="eyebrow">Our Team</p>
          <h1>Meet<br />Our Team</h1>
          <p>Talented stylists. A shared passion for beauty. A commitment to personalized care.</p>
          <a className="button button-primary" href={bookingUrl}>Book an Appointment</a>
        </div>
      </section>

      <section className="section shell">
        <div className="team-grid">
          {team.map((person, index) => (
            <article className="team-card" key={person.name}>
              <div className={`team-placeholder team-${index + 1}`}>
                <span>{person.name.slice(0,1)}</span>
              </div>
              <div className="team-card-body">
                <h2>{person.name}</h2>
                <p className="team-role">{person.role}</p>
                <p>{person.bio}</p>
                {person.href !== "#" && <a className="text-link" href={person.href}>Read bio →</a>}
              </div>
            </article>
          ))}
        </div>
        <p className="small-note">
          Team photography is set up as a dedicated image area so the original Aura portraits can be dropped in without changing the layout.
        </p>
      </section>

      <section className="value-strip value-strip-cream">
        <div><span className="line-icon">♡</span><h3>Personalized Care</h3><p>We take time to understand your goals and your hair.</p></div>
        <div><span className="line-icon">◒</span><h3>Aveda Products</h3><p>Professional, plant-powered care used throughout your visit.</p></div>
        <div><span className="line-icon">✂</span><h3>A Welcoming Experience</h3><p>Relax, be yourself, and enjoy a salon designed around you.</p></div>
      </section>
    </>
  );
}
