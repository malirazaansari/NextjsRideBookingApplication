import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 w-full">
      <div className="items-center gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
        {/* Logo + Brand */}
        <div className="flex justify-center sm:justify-start items-center space-x-3">
          <Image
            src="/logo.png"
            alt="National Cab Logo"
            width={50}
            height={50}
            className="min-w-[50px]"
          />
          <div>
            <h1 className="font-bold text-xl">NATIONAL CAB</h1>
            <p className="text-gray-500 text-sm">Always there for you</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex justify-center sm:justify-start items-center space-x-2 text-gray-700 text-sm">
          <FaMapMarkerAlt className="text-gray-500 text-lg" />
          <span>65-71 Wembley Hill Rd, Wembley HA9 8DP, UK</span>
        </div>

        {/* Phone */}
        <div className="flex justify-center sm:justify-end items-center space-x-2 text-sm">
          <FaPhoneAlt className="text-gray-500 text-lg" />
          <span>
            <span className="text-gray-700">CALL US ANY TIME: </span>
            <span className="font-bold text-[color:var(--color-primary)]">
              +(44) 1234 563789
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
