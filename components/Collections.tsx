import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-lg font-semibold">
          New Arrival —{" "}
          <Link href="/collections" className="text-blue-500 hover:underline">
            View all
          </Link>
        </p>
        <p className="text-sm text-gray-600">Prev / Next</p>
      </div>

      {!collections || collections.length === 0 ? (
        <p className="text-center text-lg font-medium">No collections found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {collections.slice(0, 4).map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="block group"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-gray-700">
                {collection.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
