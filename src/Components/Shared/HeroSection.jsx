import Image from "next/image";
import React from "react";
import tiles from "@/assests/tiles.png";
const HeroSection = () => {
  return (
    <div className="mt-5 rounded-2xl">
      <div
        className="rounded-2xl"
        style={{
          backgroundImage: "url('/hero.jpeg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "end",
          //   minHeight: "100vh",
        }}
      >
        <div className="hero min-h-fit">
          <div className="hero-content justify-between">
            <div>
              <h1 className="text-6xl font-bold">
                "Discover Your Perfect Aesthetic"
              </h1>
              <p className="py-6 text-xl text-gray-500">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Browse Now</button>
            </div>
            <div>
              <Image src={tiles} alt="tiles" width={980} height={980} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
