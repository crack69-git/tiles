import AllTilesClient from "@/Components/Shared/AllTilesClient";
import tilesData from "@/public/tilesData.json";
import React from "react";

export const metadata = {
  title: "All Tiles",
  description: "",
};

export default function Page() {
  return <AllTilesClient data={tilesData} />;
}
