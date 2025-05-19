import HeroImage from "@/components/HeroImage";
export default function Contact() {
  return (
    <>
      <HeroImage
        title="Get In Touch With"
        subtext="The Silk Lady"
      />
      <div className="text-white">
        <h1 className="text-center p-4 text-3xl">Contact By</h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-2 text-center">
          <div>
            <h1 className="text-xl p-2">Phone</h1>
            <a
              href="tel:613-735-2825"
              className="border-2 text-white pl-2 pr-2 pt-1 pb-1 block hover:underline"
            >
              613-735-2825
            </a>
          </div>
          <div>
            <h1 className="text-xl p-2">Email</h1>
            <a
              href="mailto:silklady@cogeco.ca"
              className="border-2 text-white pl-2 pr-2 pt-1 pb-1 block hover:underline"
            >
              silklady@cogeco.ca
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
