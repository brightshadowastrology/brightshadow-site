import { getLocale } from "@/utilities/getLocale";
import config from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import ProductCard from "./ProductCard";

const Products: React.FC = async () => {
  const [payload, locale] = await Promise.all([
    getPayload({ config }),
    getLocale(),
  ]);
  const result = await payload.find({
    collection: "products",
    sort: "order",
    locale,
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
