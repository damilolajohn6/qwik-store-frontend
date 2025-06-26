import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";

const ListCollections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-start container gap-10 py-8 px-12 mx-auto">
      
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex items-center justify-center gap-8 border border-black py-8 px-12">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <h1>{collection.title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCollections;
