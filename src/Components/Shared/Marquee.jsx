import React from "react";
import FastMarquee from "react-fast-marquee";
import tilesData from "../../../public/tilesData.json";

const MarqueePage = async () => {
  const data = tilesData;
  return (
    <div className="bg-blue-50 py-3 px-3 rounded-2xl my-5">
      <div className="flex items-center gap-3">
        <button className="btn btn-primary z-10">New Arrivals:</button>
        <FastMarquee speed={50} gradient={false}>
          {data.map((item) => (
            <div key={item._id}>
              <p className="mx-5">
                <span className="font-semibold">{item.title}: </span>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default MarqueePage;
