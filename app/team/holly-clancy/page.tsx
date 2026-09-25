import Link from "next/link";
import { bookingUrl, teamImages } from "../../data";

export default function HollyClancyPage() {
  return (
    <section className="stylist-page">
      <div className="shell stylist-layout">
        <div className="stylist-portrait-photo"><img src={teamImages.holly} alt="Holly Clancy" /></div>
        <div className="stylist-copy">
          <p className="eyebrow">Stylist</p>
          <h1>Holly Clancy</h1>
          <p>
            Holly has been creating hair since 2003, starting in Chicago before making her move
            to Reno in 2024. A former haircutting specialist in a departmentalized salon, she
            brings skill and intention to every cut—especially when it comes to curly and wavy
            hair. Texture is her thing, and she knows how to shape it, enhance it, and make it
            work in real life.
          </p>
          <p>
            Holly thrives in creative expression—from alternative styles and extensions to bold
            vivids and perfectly melted, lived-in color. Whether you want something low-maintenance
            and dimensional or loud and unapologetic, she’s here for it.
          </p>
          <p>
            When she’s not behind the chair, she’s with her two kids, husband, and her goofy dogs.
            She’ll never pass up a chance to dress up and loves staying active, being outdoors,
            and getting lost in music, history, books, theater—and anything a little spooky.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={bookingUrl}>Book with Holly</a>
            <Link className="button button-ghost" href="/team">Back to Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
