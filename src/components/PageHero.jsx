import Link from "next/link";

export default function PageHero({ title, breadcrumb, bgImage }) {
  return (
    <section
      className="relative flex flex-col justify-center items-center bg-cover bg-center w-full h-48 text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="z-10 relative">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="bg-white mx-auto my-2 w-12 h-0.5"></div>
        <div className="space-x-1 text-gray-200 text-xs">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>&gt;</span>
          <span className="font-medium text-white">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
