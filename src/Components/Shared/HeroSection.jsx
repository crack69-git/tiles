import Image from "next/image";
import React from "react";
import tiles from "@/assests/tiles.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="mt-5 rounded-2xl">
      <div
        className="rounded-2xl"
        style={{
          backgroundImage: "url('/hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          // color: "transparent",
          // minHeight: "100vh",
        }}
      >
        <div className="hero min-h-fit">
          <div className="hero-content justify-between">
            <div>
              <div className="badge badge-soft badge-primary text-lg font-semibold mb-5 py-4 px-6 rounded-3xl">
                Curation Excellence
              </div>
              <h1 className="text-6xl font-bold">
                "Discover Your Perfect Aesthetic"
              </h1>
              <p className="py-6 text-xl text-gray-500">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link href="/all" className="btn btn-primary">
                Browse Now
              </Link>
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
