import { bookingUrl, images } from "../data";

export default function AvedaPage() {
  return (
    <>
      <section className="aveda-hero">
        <div className="aveda-hero-copy">
          <p className="eyebrow">Aveda</p>
          <h1>Discover<br />Aveda</h1>
          <h2>Plant-powered beauty.<br />High-performance results.</h2>
          <p>
            Aveda combines the art and science of pure flower and plant essences
            to create professional hair care, styling and color products inspired by nature.
          </p>
          <a className="button button-primary" href="https://www.aveda.com/">Learn More About Aveda →</a>
        </div>
        <div className="aveda-hero-photo" style={{ backgroundImage: `url("${images.retail}")` }} />
      </section>

      <section className="value-strip value-strip-large">
        <div><span className="line-icon">◒</span><h3>Naturally Derived</h3><p>Thoughtfully sourced ingredients from plants, non-petroleum minerals, water and other natural sources.</p></div>
        <div><span className="line-icon">◎</span><h3>High Performance</h3><p>Professional formulas designed to deliver real results for healthy, beautiful hair.</p></div>
        <div><span className="line-icon">⊕</span><h3>Environmental Responsibility</h3><p>Aveda’s mission connects beauty, care and responsibility to the world around us.</p></div>
      </section>

      <section className="editorial-split">
        <div className="editorial-photo" style={{ backgroundImage: `url("${images.salonWide2}")` }} />
        <div className="editorial-copy">
          <p className="eyebrow">Aveda</p>
          <h2>Our Ingredients</h2>
          <h3>The art and science of nature</h3>
          <p>
            Nature is the inspiration behind Aveda’s products. The brand continues
            to increase its use of naturally derived ingredients whenever possible,
            pairing botanical inspiration with high-performing professional formulas.
          </p>
          <a className="button button-primary" href="https://www.aveda.com/living-aveda/ingredients">Learn More →</a>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Aveda at Aura</p><h2>Beauty with a<br />shared purpose.</h2></div>
          <p>Aura’s relationship with Aveda is part of the salon experience—from color and styling to the products used and recommended for home care.</p>
        </div>
        <div className="promo-grid">
          <a className="promo-card" href="https://www.aveda.com/"><span>New at Aveda</span><strong>Explore the latest in plant-powered care.</strong><em>See what’s new →</em></a>
          <a className="promo-card promo-dark" href="https://www.aveda.com/"><span>Styling Education</span><strong>Learn techniques, care tips and inspiration.</strong><em>Explore Aveda →</em></a>
          <a className="promo-card" href="https://www.aveda.com/"><span>Shop Aveda</span><strong>Find your salon-quality hair care routine.</strong><em>Shop now →</em></a>
        </div>
      </section>

      <section className="split-feature split-feature-bottom">
        <div className="feature-copy">
          <p className="eyebrow">Why Aura Chooses Aveda</p>
          <h2>A More Beautiful You.<br />A Brighter Tomorrow.</h2>
          <p>Aura embraces Aveda’s focus on high-performance products, personalized service and a more conscious approach to beauty.</p>
          <a className="button button-primary" href={bookingUrl}>Book an Appointment →</a>
        </div>
        <div className="image-panel" style={{ backgroundImage: `url("${images.storefront}")` }} />
      </section>
    </>
  );
}
