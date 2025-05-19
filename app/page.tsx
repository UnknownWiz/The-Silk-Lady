import TypeWriter from "@/components/TypeWriter";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed background video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/SilkLady.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Main content */}
      <div className="fixed top-0 left-0 w-full -z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white w-full">
          <h1 className="text-7xl font-bold satisfy">The Silk Lady</h1>
          <div className="text-3xl mt-4">
            <p>Specializing In Silk</p>
            <div className="text-shadow-sm font-bold sm:text-2xl md:text-1xl lg:text-1xl">
              <TypeWriter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
