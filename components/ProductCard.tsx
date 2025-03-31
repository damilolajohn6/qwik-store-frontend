"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="flex flex-col gap-2 w-full sm:w-[220px] md:w-[250px]"
    >
      <div className="w-full h-[200px] sm:h-[250px] rounded-lg overflow-hidden">
        <Image
          src={product.media[0]}
          alt="product"
          layout="responsive"
          width={450}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between items-center px-2">
        <p className="text-sm md:text-base font-bold">{product.title}</p>
        <HeartFavorite
          product={product}
          updateSignedInUser={updateSignedInUser}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
