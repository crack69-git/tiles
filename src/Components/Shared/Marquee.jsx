import React from "react";
import FastMarquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const MarqueePage = () => {
  return (
    <div className="bg-amber-50 py-3 px-3 rounded-2xl my-5">
      <div className="flex items-center gap-3">
        <button className="btn btn-primary z-10">New Arrivals:</button>
        <FastMarquee speed={50} gradient={false}>
          {news.map((n) => (
            <p key={n._id}>{n.title}</p>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default MarqueePage;
