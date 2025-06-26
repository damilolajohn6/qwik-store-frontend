import React from "react";
import Link from "next/link";
import { getCollections, getProducts } from "@/lib/actions/actions";

const CollectionsPage = async () => {
  // Fetch collections and products in parallel
  const collectionsData = await getCollections();
  const productsData = await getProducts();

  // Create a map of collection IDs to products for easy lookup
  const productsByCollection: Record<string, ProductType[]> = {};

  productsData.forEach((product: ProductType) => {
    product.collections.forEach((collectionId: string) => {
      if (!productsByCollection[collectionId]) {
        productsByCollection[collectionId] = [];
      }
      productsByCollection[collectionId].push(product);
    });
  });

  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>

      {!collectionsData || collectionsData.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64 w-full">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">
                    {collection.title}
                  </h2>
                </div>
              </div>

              <div className="p-4">
                {/* <p className="text-gray-600 mb-4">
                  {collection.products} products
                </p> */}

                {/* <h3 className="font-semibold mb-2">Featured Products:</h3> */}
                {/* <div className="grid grid-cols-2 gap-2">
                  {productsByCollection[collection._id]
                    ?.slice(0, 4)
                    .map((product: ProductType) => (
                      <div key={product._id} className="border rounded p-2">
                        {product.media[0] && (
                          <img
                            src={product.media[0]}
                            alt={product.title}
                            className="w-full h-20 object-cover mb-1"
                          />
                        )}
                        <p className="text-sm truncate">{product.title}</p>
                        <p className="text-xs text-gray-500">
                          ${product.price}
                        </p>
                      </div>
                    ))}
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
