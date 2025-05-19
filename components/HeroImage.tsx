import Image from "next/image";

export default function HeroImage({
  title,
  subtext,
}: {
  title?: string;
  subtext?: string;
}) {
  return (
    <div className="relative">
      <Image
        className="w-full h-[400px] object-cover"
        width={1920}
        height={400}
        src="/FlowerArrangement.png"
        alt="Background photo of flowers"
      />
      {(title || subtext) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          {title && (
            <h1 className="text-white text-3xl font-bold drop-shadow backdrop-blur-xl bg-black/30 p-4 rounded-lg">
              {title}
            </h1>
          )}
          {subtext && (
            <p className="text-white text-4xl font-bold drop-shadow p-2 rounded-lg satisfy">
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
