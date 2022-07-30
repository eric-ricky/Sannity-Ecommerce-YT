import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { Product as product_type } from "../types";

interface IProduct {
  product: product_type;
}

const Product: React.FC<IProduct> = ({
  product: { image, name, slug, price },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]).url()}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
