export default function MobileAppSection() {
    const stats = [
      { icon: "car.png", number: 1200, label: "Successful Drives" },
      { icon: "/thumb-up.png", number: 1000, label: "Happy Customers" },
      { icon: "/driver.png", number: 350, label: "Talented Drivers" },
      { icon: "/milestone.png", number: 148, label: "Cities Covered" },
    ];

    return (
      <section className="bg-[color:var(--color-secondary)] py-16">
        <div className="items-center gap-10 grid grid-cols-1 lg:grid-cols-3 mx-auto px-6 max-w-7xl">
          {/* Stats Grid */}
          <div className="gap-4 grid grid-cols-2">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-black p-6 border border-white text-white text-center">
                <img src={item.icon} alt={item.label} className="mb-2 w-10 h-10" />
                <div className="font-bold text-2xl">{item.number}</div>
                <p className="mt-1 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Text & App Buttons */}
          <div className="space-y-4 lg:text-left text-center">
            <h3 className="font-semibold text-[color:var(--color-foreground)] text-lg">GET OUR</h3>
            <h2 className="font-bold text-[color:var(--color-foreground)] text-2xl">MOBILE APP</h2>
            <p className="text-gray-600 text-sm">
              Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch. Goodbye gray sky.
            </p>
            <p className="text-gray-600 text-sm">
              There's nothing can hold me when I hold you. Feels so right it can't be wrong. Rockin’ and rollin’ all week long.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <img src="/google-play.png" alt="Google Play" className="w-32 h-auto" />
              <img src="/app-store.png" alt="App Store" className="w-32 h-auto" />
            </div>
          </div>

          {/* App Preview */}
          <div className="hidden lg:block">
            <img src="/detail.png" alt="App Preview" className="mx-auto w-full max-w-sm" />
          </div>
        </div>
      </section>
    );
  }
