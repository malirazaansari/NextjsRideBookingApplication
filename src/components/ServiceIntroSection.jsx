import { FaAngleDoubleRight } from "react-icons/fa";

export default function ServiceIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="items-center gap-10 grid grid-cols-1 md:grid-cols-3 mx-auto px-6 max-w-7xl">
        {/* Taxi Image */}
        <div className="col-span-1">
          <img
            src="/taxi-side.png"
            alt="Taxi"
            className="mx-auto w-full max-w-sm"
          />
        </div>

        {/* Who We Are */}
        <div className="space-y-4 col-span-1">
          <p className="font-semibold text-gray-400 text-sm">GET TO KNOW</p>
          <h2 className="font-bold text-[color:var(--color-foreground)] text-2xl">
            WHO WE ARE
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail.
            <br />
            Day for a three hour tour a three hour tour. These Happy Days are yours and mine Happy Days. Doin' it our way.
            <br />
            Nothin's gonna turn us back now. Straight ahead and on the track now. We're gonna
          </p>
          <button className="hover:bg-[color:var(--color-primary)] mt-2 px-6 py-2 border border-[color:var(--color-primary)] rounded font-semibold text-[color:var(--color-primary)] hover:text-white text-sm transition">
            KNOW MORE
          </button>
        </div>

        {/* Features List */}
        <div className="col-span-1">
          <h3 className="mb-4 font-bold text-[color:var(--color-foreground)] text-base">
            WE DO MORE THAN YOU WISH
          </h3>
          <div className="mb-4 border-[color:var(--color-primary)] border-b-2 border-dotted w-24" />
          <ul className="space-y-2 text-gray-700 text-sm">
            {[
              "Flying away on a wing and a prayer who could it be",
              "Sclemeel schlemazel hasenfeffer incorporated",
              "you sure to get a smile from seven stranded Isels",
              "lets make this as the most of this beautiful day",
              "These Happy Days are yours and mine Happy Days",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaAngleDoubleRight className="mt-1 text-[color:var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-500 text-sm">
            This is what we call the Muppet Show. Makin their way the only way they know how. That’s just a little bit more than the law will allow. Just two good.
          </p>
        </div>
      </div>
    </section>
  );
}
