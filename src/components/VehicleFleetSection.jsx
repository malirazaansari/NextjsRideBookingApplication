"use client";

import { useState } from "react";
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tabs = ["Luxury Cars", "Regular Rider", "Airport Shuttle"];
const details = [
  { label: "Passenger Capacity", value: "4 + 1 Driver" },
  { label: "Regular Fare", value: "$6 / Km (Day Travel)" },
  { label: "Maximum Speed", value: "60Km / hr - City Limit" },
  { label: "Availability", value: "Offering Anytime" },
  { label: "Contract Details", value: <span className="font-semibold text-[color:var(--color-primary)]">Contact Now</span> },
];

const thumbnails = ["/blog-3.jpg", "/blog-3.jpg", "/blog-3.jpg"];

export default function VehicleFleetSection() {
  const [activeTab, setActiveTab] = useState("Luxury Cars");
  const [activeImage, setActiveImage] = useState(0);
  const [view, setView] = useState("Cab Details");

  return (
    <section className="bg-white py-16">
      <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg text-center">VEHICLES IN OUR FLEET</h2>
      <div className="mx-auto my-4 border-[color:var(--color-primary)] border-b-2 border-dotted w-24" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold border transition ${
              activeTab === tab
                ? "bg-[color:var(--color-primary)] text-white"
                : "border-[color:var(--color-primary)] text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="items-start gap-6 grid grid-cols-1 md:grid-cols-3 mx-auto px-6 max-w-6xl">
        {/* Image carousel */}
        <div className="relative col-span-1">
          <img src={thumbnails[activeImage]} alt="Cab" className="shadow rounded w-full object-cover" />
          {/* Arrow controls */}
          <button
            className="top-1/2 left-2 absolute bg-black bg-opacity-50 p-1 rounded-full text-white -translate-y-1/2 transform"
            onClick={() => setActiveImage((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="top-1/2 right-2 absolute bg-black bg-opacity-50 p-1 rounded-full text-white -translate-y-1/2 transform"
            onClick={() => setActiveImage((prev) => (prev + 1) % thumbnails.length)}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Thumbnail column */}
        <div className="flex flex-col items-center gap-2 col-span-1">
          <button onClick={() => setActiveImage((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)}>
            <FaChevronUp className="text-gray-500 hover:text-[color:var(--color-primary)]" />
          </button>
          {thumbnails.map((thumb, i) => (
            <img
              key={i}
              src={thumb}
              alt={`Thumbnail ${i}`}
              onClick={() => setActiveImage(i)}
              className={`w-28 h-16 object-cover cursor-pointer border ${
                activeImage === i
                  ? "border-[color:var(--color-primary)]"
                  : "border-gray-200"
              }`}
            />
          ))}
          <button onClick={() => setActiveImage((prev) => (prev + 1) % thumbnails.length)}>
            <FaChevronDown className="text-gray-500 hover:text-[color:var(--color-primary)]" />
          </button>
        </div>

        {/* Details Section */}
        <div className="col-span-1 border rounded">
          {/* Toggle buttons */}
          <div className="flex">
            {["Cab Details", "Customer Feedback"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`w-1/2 py-2 text-sm font-semibold border-b-2 transition ${
                  view === v
                    ? "text-[color:var(--color-primary)] border-[color:var(--color-primary)]"
                    : "text-gray-500 border-transparent hover:border-gray-300"
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-4 text-sm">
            {view === "Cab Details" ? (
              <ul className="space-y-3">
                {details.map((item, idx) => (
                  <li key={idx} className="flex justify-between pb-2 border-b font-medium">
                    <span className="text-gray-700 text-xs uppercase">{item.label}</span>
                    <span className="text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                “The cab was clean, and the driver was punctual. Highly recommended for daily travel.”
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
