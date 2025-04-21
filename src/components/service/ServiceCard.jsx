export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="flex items-start gap-4 text-left">
        <img src={icon} alt={title} className="w-8 h-8 text-[color:var(--color-primary)]" />
        <div>
          <h4 className="mb-1 font-bold text-sm">{title}</h4>
          <p className="mb-2 text-gray-600 text-xs">{description}</p>
          <a href="#" className="font-semibold text-[color:var(--color-primary)] text-xs hover:underline">
            READ MORE . .
          </a>
        </div>
      </div>
    );
  }
