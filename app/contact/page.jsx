import HeroImage from "@/components/HeroImage";
export default function Contact() {
  return (
    <>
      <HeroImage
        title="Get In Touch With"
        subtext="The Silk Lady"
      />
      <div className="text-white">
        <h1 className="text-center p-4 text-4xl satisfy">Contact Us</h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-2 text-center">
          <div>
            <p>For any inquiries, please feel free to reach out to The Silk Lady by phone or email. Whether you have questions, requests, or simply wish to connect, we're here to assist you.</p>
          </div>
        </div>
      </div>
    </>
  );
}
