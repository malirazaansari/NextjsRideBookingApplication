"use client";

import { Button } from "antd";

export default function Hero() {
  return (
    <section
      className="relative flex justify-center items-center bg-cover bg-center px-4 h-[90vh] text-center"
      style={{
        backgroundImage: `url('/photo-slide-hero.png')`,
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="space-y-6 max-w-2xl text-white">
        <h1
          className="text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A RELIABLE WAY TO TRAVEL
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          Come and listen to a story about a man named Jed a poor mountaineer barely kept his family fed so lets make the most of this beautiful day since we are together it is a beautiful day in this neighborhood a beautiful day for a neighbor
        </p>
        <div className="flex justify-center gap-4">
          {/* PRIMARY BLUE BUTTON */}
          <Button
  type="default"
  className="!bg-[color:var(--color-primary)] hover:!bg-[color:var(--color-accent)] !border-none !text-white hover:!text-white"
>
  PURCHASE
</Button>


          {/* OUTLINED WHITE BUTTON */}
          <Button
            type="default"
            className="!bg-transparent hover:!bg-white !border !border-white !text-white hover:!text-black"
          >
            SEE MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
