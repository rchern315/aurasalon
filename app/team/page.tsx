import Link from "next/link";
import { bookingUrl, images } from "../data";

const team = [
  {
    name: "Jennifer",
    role: "Owner / Stylist",
    bio: "Aveda stylist and Aura Salon owner with a passion for continued education, precision cutting, customized color and creating a great guest experience.",
    href: "/team/jennifer-utu",
    image: "/team/jennifer.jpg"
  },
  {
    name: "Carol",
    role: "Stylist",
    bio: "A fun-loving, relaxed stylist with a passion for helping guests feel their best, plus specialties in extensions, perms and vibrant color.",
    href: "/team/carol-roberts",
    image: "/team/carol.jpg"
  },
  {
    name: "Rachelle",
    role: "Stylist",
    bio: "Rachelle brings personalized care, creativity and a love of helping guests feel confident in hair that works beautifully for them.",
    href: "#",
    image: "/team/rachelle.jpg"
  },
  {
    name: "Holly",
    role: "Stylist",
    bio: "A texture-loving stylist specializing in curly and wavy hair, alternative styles, extensions, vivids and lived-in color.",
    href: "/team/holly-clancy",
    image: "/team/holly.jpg"
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
              <div className="team-photo">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="team-card-body">
                <h2>{person.name}</h2>
                <p className="team-role">{person.role}</p>
                <p>{person.bio}</p>
                {person.href !== "#" && <Link className="text-link" href={person.href}>Read bio →</Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="value-strip value-strip-cream">
        <div><span className="line-icon">♡</span><h3>Personalized Care</h3><p>We take time to understand your goals and your hair.</p></div>
        <div><span className="line-icon">◒</span><h3>Aveda Products</h3><p>Professional, plant-powered care used throughout your visit.</p></div>
        <div><span className="line-icon">✂</span><h3>A Welcoming Experience</h3><p>Relax, be yourself, and enjoy a salon designed around you.</p></div>
      </section>
    </>
  );
}
