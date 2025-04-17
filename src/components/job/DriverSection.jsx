import DriverCard from "./DriverCard";

export default function DriversSection() {
  const drivers = [
    {
      name: "Johny Roges",
      role: "Sedan Driver",
      level: "Senior",
      rating: 4,
      image: "/driver-1.png",
    },
    {
      name: "Altrin Mosea",
      role: "SUV Driver",
      level: "Expert",
      rating: 5,
      image: "/driver-2.png",
    //   highlighted: true,
    },
    {
      name: "Luther King",
      role: "Sedan Driver",
      level: "Starter",
      rating: 3.5,
      image: "/driver-3.png",
    },
    {
      name: "William Turner",
      role: "Limousine Driver",
      level: "Senior",
      rating: 4.5,
      image: "/driver-4.png",
    },
    {
      name: "WE ARE HIRING",
      role: "",
      level: "",
      rating: 0,
      image: "/driver-placeholder.png",
    },
  ];

  return (
    <section className="bg-[color:var(--color-secondary)] py-16">
      <div className="mb-12 text-center">
        <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg tracking-wide">
          DRIVERS ON YOUR SERVICE
        </h2>
        <div className="mx-auto mt-2 border-[color:var(--color-accent)] border-b-2 border-dotted w-24 h-1" />
      </div>

      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-auto px-6 max-w-7xl">
        {drivers.map((driver, index) => (
          <DriverCard key={index} {...driver} />
        ))}
      </div>
    </section>
  );
}
