import AllCardSection from "@/Components/Shared/AllCardSection";
import AllTilesClient from "@/Components/Shared/AllTilesClient";
import Card from "@/Components/Shared/Card";
import React from "react";
import { useForm } from "react-hook-form";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/tilesData.json");
  return res.json();
};
const page = async () => {
  const data = await fetchData();
  // console.log("data", data);

  return <AllTilesClient data={data} />;
};

export default page;
