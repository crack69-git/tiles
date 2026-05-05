import Image from "next/image";
import React from "react";
import tiles from "@/assests/tiles.png";
import Link from "next/link";
import dot from "@/assests/dot.png";
import facebook from "@/assests/facebook.png";
import gmail from "@/assests/gmail.png";
import instagram from "@/assests/instagram.png";
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
                <Image
                  src={dot}
                  alt="dot"
                  width={20}
                  height={20}
                  className="inline-block mr-2"
                />
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
              <div className="flex gap-4 mt-6">
                <div className="rounded-full p-2 bg-gray-200">
                  <Image src={facebook} alt="facebook" width={30} height={30} />
                </div>
                <div className="rounded-full p-2 bg-gray-200">
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="rounded-full p-2 bg-gray-200">
                  <Image src={gmail} alt="gmail" width={30} height={30} />
                </div>
              </div>
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
