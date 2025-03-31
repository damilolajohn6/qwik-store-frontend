import Collections from "@/components/Collections";
import FashionTrends from "@/components/FashionTrends";
import JustClothAbout from "@/components/JustClothAbout";
import JustClothingShowcase from "@/components/JustClothShowcase";
import ListCollections from "@/components/ListCollections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" /> */}
      <JustClothingShowcase />
      <ListCollections />
      <Collections />
      <JustClothAbout />
      <ProductList />
      <FashionTrends />
    </>
  );
}

export const dynamic = "force-dynamic";

