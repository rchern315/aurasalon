import { images } from "../data";

export default function GalleryPage() {
  const gallery = [images.hero, images.salonWide, images.salonWide2, images.retail, images.arches, images.storefront, images.franktown];
  return (
    <>
      <section className="page-intro"><div className="shell"><p className="eyebrow">Inside Aura</p><h1>Gallery</h1><p className="lede">A bright, modern salon tucked inside Franktown Corners in Reno.</p></div></section>
      <section className="gallery-grid">
        {gallery.map((src, index) => <div className="gallery-tile" key={src} style={{ backgroundImage: `url("${src}")` }} aria-label={`Aura Salon gallery image ${index + 1}`} />)}
      </section>
    </>
  );
}
