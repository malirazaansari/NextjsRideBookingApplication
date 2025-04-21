export default function ClientLogosSection() {
    const logos = [
      "/partner-1.png",
      "/partner-2.png",
      "/partner-3.png",
      "/partner-4.png",
      "/partner-5.png",
      "/partner-6.png",
    ];

    return (
      <section className="bg-[#f9f9f9] py-16 text-center">
        <h2 className="font-semibold text-[color:var(--color-foreground)] text-sm">
          OUR CLIENTS AND PARTNERS
        </h2>
        <div className="mx-auto my-4 border-[color:var(--color-primary)] border-b-2 border-dotted w-24" />

        <div className="justify-items-center gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 px-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center items-center bg-white hover:opacity-80 shadow-sm p-4 border border-gray-100 rounded w-full h-24 transition"
            >
              <img
                src={logo}
                alt={`Client Logo ${i + 1}`}
                className="grayscale hover:grayscale-0 max-h-14 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
