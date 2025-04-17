export default function ReasonCard({ image, title, description, link = "#" }) {
    return (
      <div className="bg-white shadow-md rounded w-full max-w-sm overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {/* Angled overlay */}
          <div className="bottom-[-1px] left-0 absolute bg-white w-full h-10 rotate-[1.5deg] origin-top-left" />
        </div>

        {/* Content */}
        <div className="z-10 relative bg-white -mt-6 px-6 pt-4 pb-6">
          <h3 className="mb-2 font-semibold text-base">{title}</h3>
          <p className="mb-4 text-gray-500 text-sm">{description}</p>
          <a href={link} className="font-semibold text-[color:var(--color-primary)] text-sm hover:underline">
            READ MORE
          </a>
        </div>
      </div>
    );
  }
