export default function MoreServiceSection() {
    const services = [
      {
        title: "HOME PICKUP",
        icon: "/home.png",
        description:
          "Come and dance on our floor. Take a step that is new. We’ve a loveable space that needs your face threes company too.",
      },
      {
        title: "AIRPORT TRANSPORTATION",
        icon: "/airport.png",
        description:
          "Come and dance on our floor. Take a step that is new. We’ve a loveable space that needs your face threes company too.",
      },
      {
        title: "COMPANY CONTRACT",
        icon: "/building.png",
        description:
          "Got a dream and we just know now we are gonna make us dream come and we know flipper lives in a world",
      },
    ];

    return (
      <section className="bg-white py-16">
        <div className="items-center gap-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 max-w-7xl">
          {/* Taxi Image */}
          <div>
            <img
              src="/taxi-side.png"
              alt="Taxi"
              className="mx-auto w-full max-w-md"
            />
          </div>

          {/* Content */}
          <div>
            <h4 className="mb-1 font-semibold text-gray-500 text-sm">WE DO MORE</h4>
            <h2 className="mb-3 font-bold text-[color:var(--color-foreground)] text-2xl">
              THAN YOU WISH
            </h2>
            <p className="mb-6 text-gray-600 text-sm">
              The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour.
            </p>

            {/* Service Boxes */}
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mb-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <img src={service.icon} alt={service.title} className="w-10 h-10" />
                  <div>
                    <h4 className="mb-1 font-bold text-sm">{service.title}</h4>
                    <p className="mb-1 text-gray-600 text-xs">{service.description}</p>
                    <a href="#" className="font-semibold text-[color:var(--color-primary)] text-xs hover:underline">
                      READ MORE . .
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] px-6 py-2 rounded font-semibold text-white text-sm transition">
              MORE SERVICE
            </button>
          </div>
        </div>
      </section>
    );
  }
