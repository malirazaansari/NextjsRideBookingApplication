export default function StatsHighlight() {
    const stats = [
      {
        title: "SUCCESSFUL DRIVES",
        icon: "/car.png",
        value: "1200",
      },
      {
        title: "HAPPY CUSTOMERS",
        icon: "/thumb-up.png",
        value: "2000",
      },
      {
        title: "TALENTED DRIVERS",
        icon: "/driver.png",
        value: "350",
      },
      {
        title: "CITIES COVERED",
        icon: "/milestone.png",
        value: "148",
      },
    ];

    return (
      <section
        className="bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: "url('/statbb.jpg')" }}
      >
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto px-6 max-w-6xl">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-8 border border-white rounded-sm text-center"
            >
              <h4 className="mb-4 font-semibold text-xs tracking-widest">
                {item.title}
              </h4>
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-4 w-8 h-8"
              />
              <p className="font-bold text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
