import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import ProductCard from "./ProductCard";

const Products: React.FC = async () => {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "products",
    sort: "order",
  });

  const products = result.docs;

  if (!products.length) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
