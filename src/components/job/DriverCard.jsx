export default function DriverCard({ name, role, level, rating, image, highlighted = false }) {
    return (
      <div
        className={`group transition duration-300 rounded shadow-md overflow-hidden border border-gray-200
          ${highlighted ? "bg-[color:var(--color-accent)] text-white" : "bg-white"}
          hover:bg-[color:var(--color-accent)] hover:text-white`}
      >
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="space-y-1 p-4">
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="opacity-80 text-xs">{role}</p>
          <p className="text-xs">Skill Level: {level}</p>
          <div className="text-yellow-400 text-sm">
            {"★".repeat(Math.floor(rating))}
            {rating % 1 !== 0 ? "½" : ""}
          </div>
        </div>
      </div>
    );
  }
