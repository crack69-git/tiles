import React from "react";
import Card from "./Card";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/tilesData.json");
  return res.json();
};
const ProductSection = async () => {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-4 gap-3">
        {data.slice(0, 4).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
