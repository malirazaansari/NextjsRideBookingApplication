import ReasonCard from "./ReasonCard";

export default function ReasonsSection() {
  const cards = [
    {
      title: "FEEL THE COMFORT",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/reason1.png",
    },
    {
      title: "EXPERIENCED DRIVERS",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/reason2.png",
    },
    {
      title: "TRUST AND SAFETY",
      description:
        "The first mate and his Skipper too will do their very best to make the others in their tropic island nest the year.",
      image: "/reason3.png",
    },
  ];

  return (
    <section className="bg-[color:var(--color-secondary)] py-16">
      <div className="mb-12 text-center">
        <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg tracking-wide">
          REASONS TO CHOOSE US
        </h2>
        <div className="mx-auto mt-2 border-[color:var(--color-accent)] border-b-2 border-dotted w-24 h-1" />
      </div>

      <div className="justify-items-center gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 max-w-7xl">
        {cards.map((card, index) => (
          <ReasonCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link="#"
          />
        ))}
      </div>
    </section>
  );
}
