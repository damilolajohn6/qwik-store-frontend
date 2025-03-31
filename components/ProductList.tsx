import { getCollections, getProducts } from "@/lib/actions/actions";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const collections = await getCollections();
  const products = await getProducts();

  return (
    <div className="flex flex-col items-start gap-6 py-8 px-12 mx-auto">
      <div className="flex justify-between w-full">
        <div>
          <p className="text-heading4-bold py-7">Top Category</p>
          <div className="flex flex-col items-start container gap-10 py-8 px-12 mx-auto">
            {!collections || collections.length === 0 ? (
              <p className="text-body-bold">No collections found</p>
            ) : (
              <div className="flex items-center justify-center gap-8 py-8 px-12">
                {collections.map((collection: CollectionType) => (
                  <Link
                    href={`/collections/${collection._id}`}
                    key={collection._id}
                  >
                    <h1>{collection.title}</h1>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <Link href="/products" className="text-body-bold text-gray-600">
          ALL Product - View all
        </Link>
      </div>

      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
