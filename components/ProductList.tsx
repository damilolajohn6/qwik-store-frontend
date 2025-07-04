import { getCollections, getProducts } from "@/lib/actions/actions";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const collections = await getCollections();
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold py-4 sm:py-6">
            Top Category
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {!collections || collections.length === 0 ? (
              <p className="text-sm sm:text-base font-semibold text-center col-span-full">
                No collections found
              </p>
            ) : (
              collections.map((collection: CollectionType) => (
                <Link
                  href={`/collections/${collection._id}`}
                  key={collection._id}
                  className="group block p-3 sm:p-4 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-blue-600 truncate">
                    {collection.title}
                  </h1>
                </Link>
              ))
            )}
          </div>
        </div>
        <Link
          href="/products"
          className="text-sm sm:text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200 self-start sm:self-center"
        >
          ALL Product - View all
        </Link>
      </div>

      {!products || products.length === 0 ? (
        <p className="text-sm sm:text-base font-semibold text-center">
          No products found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

