import AllTilesClient from "@/Components/Shared/AllTilesClient";
import React from "react";
export const metadata = {
  title: "All Tiles",
  description: "",
};
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/tilesData.json");
  return res.json();
};
const page = async () => {
  const data = await fetchData();
  return <AllTilesClient data={data} />;
};

export default page;
