import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 text-[color:var(--color-foreground)] text-center"
      style={{
        backgroundImage: `url('/testimonial.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="z-0 absolute inset-0 bg-white opacity-80"></div>

      {/* Border images */}
      <div className="top-0 left-0 z-10 absolute bg-repeat-x bg-top w-full h-5"
           style={{ backgroundImage: "url('/broder-checker.png')" }} />
      <div className="bottom-0 left-0 z-10 absolute bg-repeat-x bg-bottom w-full h-5"
           style={{ backgroundImage: "url('/broder-checker.png')" }} />

      {/* Content */}
      <div className="z-20 relative mx-auto px-6 max-w-4xl">
        <h2 className="mb-6 font-semibold text-lg">WORDS FROM OUR CUSTOMERS</h2>
        <div className="mx-auto mb-6 border-[color:var(--color-accent)] border-b-2 border-dotted w-24" />

        <p className="text-gray-700 text-base md:text-lg italic">
          <FaQuoteLeft className="inline-block mr-2 text-[color:var(--color-accent)]" />
          Now the world do not move to the beat of just one drum what might be right for you may not be right for some
          makin their way the only way they know how that’s just a little bit more than the law will allow wouldn’t you like
          <FaQuoteRight className="inline-block ml-2 text-[color:var(--color-accent)]" />
        </p>

        <p className="mt-6 font-semibold text-black text-sm">– Thomas Knoll</p>
      </div>
    </section>
  );
}
