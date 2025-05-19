import HeroImage from "@/components/HeroImage";

export default function About() {
  return (
    <>
      <HeroImage title="Handmade With Love"/>
    <div className="flex flex-col items-center justify-center h-screen text-white p-4">  
        <h1 className="pb-2 items-start text-2xl">About <span className="satisfy text-3xl font-bold ">The Silk Lady</span></h1>
        <div className="space-y-4">
            <p>Providing heartfelt remembrance through Silk Tombstone Saddles, Tombstone Cones, Seasonal Tombstone Arrangements, and Custom Orders—crafted with care here in the Ottawa Valley.
</p>
        <p>Flowers may not have a voice, yet their gentle presence speaks volumes—offering comfort when words fail. They hold a language of sympathy, love, and understanding, expressing emotions beyond what money can ever convey. Each arrangement is designed with thoughtfulness and care, honoring cherished memories and ensuring that loved ones are remembered with beauty and grace.

</p>
<p>With years of experience and a deep passion for floral artistry, Heather is a highly respected florist known for her craftsmanship and attention to detail. Now specializing in silk floral arrangements for memorials, including tombstone saddles, seasonal tributes, and custom designs, she brings beauty and meaning to remembrance. Her work ensures that every arrangement serves as a heartfelt tribute, offering comfort and lasting elegance.
</p>
<blockquote>“Whether it’s a timeless tribute or a seasonal touch, these silk florals provide a lasting symbol of love and remembrance—standing strong through the seasons, just as the memories they honor do.
”</blockquote>
      </div>
    </div>
    </>
  );
}
