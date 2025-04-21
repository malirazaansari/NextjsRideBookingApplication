import ServiceCard from "./ServiceCard";

export default function ServiceGridSection() {
  const services = [
    {
      icon: "/men.png",
      title: "GENUINE APPROACH",
      description:
        "Come and dance on our floor. Take a step that is new. We’ve a loveable space that needs your face threes company too.",
    },
    {
      icon: "/home.png",
      title: "HOME PICKUP",
      description:
        "Come and dance on our floor. Take a step that is new. We’ve a loveable space that needs your face threes company too.",
    },
    {
      icon: "/airport.png",
      title: "AIRPORT TRANSPORTATION",
      description:
        "Come and dance on our floor. Take a step that is new. We’ve a loveable space that needs your face threes company too.",
    },
    {
      icon: "/bulb.png",
      title: "ONE WAY RENTAL",
      description:
        "Got a dream and we just know now we are gonna make us dream come and we know flipper lives in a world",
    },
    {
      icon: "/building.png",
      title: "COMPANY CONTRACT",
      description:
        "Got a dream and we just know now we are gonna make us dream come and we know flipper lives in a world",
    },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg">
        WHAT WE DO FOR YOU
      </h2>
      <div className="mx-auto my-4 border-[color:var(--color-primary)] border-b-2 border-dotted w-24" />

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 max-w-6xl text-left">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
        <div className="flex justify-center items-center sm:col-span-2 md:col-span-1 mt-2">
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">
              No one you see is smarter than he. The mate was a mighty sailin man Skip brave and sure Five.
            </p>
            <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] px-6 py-2 rounded font-semibold text-white text-sm">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
