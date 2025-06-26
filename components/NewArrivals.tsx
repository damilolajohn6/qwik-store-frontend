import React from "react";
import Link from "next/link";
import { getCollectionDetails, getCollections } from "@/lib/actions/actions";

const NewArrivalsCarousel = async () => {
  // First, find the "New Arrival" collection
  const collections = await getCollections();
  const newArrivalsCollection = collections.find(
    (collection: CollectionType) => collection.title === "Newest Arrival"
  );

  if (!newArrivalsCollection) {
    return <p className="text-body-bold">New Arrivals collection not found</p>;
  }

  // Get the collection details with products
  const collectionWithProducts = await getCollectionDetails(
    newArrivalsCollection._id
  );

  return (
    <div className="px-4 py-8 md:px-10 lg:px-20">
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <Link
          href={`/collections/${newArrivalsCollection._id}`}
          className="text-sm font-medium text-blue-500 hover:underline"
        >
          View all
        </Link>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-lg font-semibold">
          New Arrival —
          <Link
            href={`/collections/${newArrivalsCollection._id}`}
            className="text-blue-500 hover:underline"
          >
            View all
          </Link>
        </p>
        <p className="text-sm text-gray-600">Prev / Next</p>
      </div>

      <div className="relative">
        {/* Carousel content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collectionWithProducts.products.map((product: ProductType) => (
            <div key={product._id} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                {product.media[0] && (
                  <img
                    src={product.media[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900">{product.title}</h3>
                {/* <p className="text-sm text-gray-700">{product.description}</p> */}
                <p className="mt-1 font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - you'll need to implement the functionality */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewArrivalsCarousel;
