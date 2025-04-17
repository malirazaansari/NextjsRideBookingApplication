import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: "/services" },
  { name: "BLOG", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "PAGES", href: "/pages" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-gray-200 border-t w-full">
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-7xl">
        {/* Navigation Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                link.active
                  ? "text-[color:var(--color-primary)]"
                  : "text-black hover:text-[color:var(--color-primary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Book Button */}
        <Link
          href="/book"
          className="bg-[color:var(--color-primary)] hover:opacity-90 px-5 py-2 rounded font-semibold text-white text-sm transition"
        >
          BOOK FOR A RIDE
        </Link>
      </div>
    </nav>
  );
}
