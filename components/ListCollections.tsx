import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";

const ListCollections = async () => {
  const collections = await getCollections();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!collections || collections.length === 0 ? (
        <p className="text-base sm:text-lg font-bold text-center">No collections found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
          {collections.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="group block p-4 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-blue-600 truncate">
                {collection.title}
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCollections;
