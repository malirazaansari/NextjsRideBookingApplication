import { FaPlayCircle } from "react-icons/fa";

export default function ServicesOfferSection() {
  return (
    <section
      className="bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/service-bg.jpg')" }}
    >
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto px-6 max-w-7xl">
        {/* Left Column */}
        <div className="space-y-6 col-span-1">
          <div>
            <p className="font-semibold text-[color:var(--color-accent)] text-sm">
              ENJOY THE
            </p>
            <h2 className="mb-2 font-bold text-white text-2xl">
              SERVICES WE OFFER
            </h2>
            <p className="text-gray-200 text-sm">
              The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail. Day for a three hour tour a three hour tour.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 text-black">
            <div className="flex items-start gap-4 mb-2">
              <img src="/anytime.png" className="w-6 h-6" />
              <h4 className="font-bold text-sm uppercase">
                Anytime Customer Support
              </h4>
            </div>
            <hr className="mb-2 border-gray-200" />
            <p className="mb-4 text-gray-600 text-xs">
              I have always wanted to have a neighbor just like you. I’ve always wanted to live in a with you. Boy the way Glen Miller played. Songs that
            </p>
            <a
              href="#"
              className="font-semibold text-[color:var(--color-primary)] text-xs"
            >
              READ MORE …
            </a>
          </div>
        </div>

        {/* Center image card + play */}
        <div className="space-y-6">
          <img
            src="/tilt4.jpg"
            alt="Taxi Service"
            className="shadow rounded"
          />
          <div
            className="group relative flex justify-center items-center bg-[color:var(--color-primary)] h-48 cursor-pointer"
            style={{
              backgroundImage: "url('/tilt3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
            <FaPlayCircle className="z-10 text-white text-4xl group-hover:scale-110 transition" />
            <span className="bottom-4 absolute text-white text-xs">Play Video</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 col-span-1">
          <div className="bg-white shadow-md p-6 text-black">
            <div className="flex items-start gap-4 mb-2">
              <img src="/building.png" className="w-6 h-6" />
              <h4 className="font-bold text-sm uppercase">
                Travel Around Anywhere
              </h4>
            </div>
            <hr className="mb-2 border-gray-200" />
            <p className="mb-4 text-gray-600 text-xs">
              They are all together okay the addams family. Would not you like to get away? Sometimes you wanted to go where everybody knows your
            </p>
            <a
              href="#"
              className="font-semibold text-[color:var(--color-primary)] text-xs"
            >
              READ MORE …
            </a>
          </div>

          <div>
            <p className="mb-4 text-white text-sm">
              Got kind of tired packin' and unpacking town to town and up and down the dial. Wouldn't you like to get away? Sometimes you want to go where everybody
            </p>
            <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] px-6 py-2 rounded font-semibold text-white text-sm">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
