import TiltCard from "@/components/title/TiltCard";

export default function WhoWeAreSection() {
  const cards = [
    {
      title: "EXPERIENCED DRIVERS",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/tilt1.jpg",
    },
    {
      title: "TRUST AND SAFETY",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/tilt2.jpg",
    },
    {
      title: "FEEL THE COMFORT",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/tilt3.jpg",
    },
  ];

  return (
    <section className="bg-[color:var(--color-secondary)] py-16 text-center">
      <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg">
        HERE IS WHO WE ARE
      </h2>
      <div className="mx-auto my-4 border-[color:var(--color-primary)] border-b-2 border-dotted w-24" />

      <div className="justify-items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6">
        {cards.map((card, index) => (
          <TiltCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
