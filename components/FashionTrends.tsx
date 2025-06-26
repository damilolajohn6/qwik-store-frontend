"use client";

import React from "react";
import Image from "next/image";

interface FashionItem {
  id: number;
  title: string;
  description: string;
  category: "tops" | "gowns";
  featured?: boolean;
  imageUrl: string;
  author: Founder;
}

interface Founder {
  name: string;
  title: string;
  bio?: string;
}

const FashionTrends: React.FC = () => {
  const founder: Founder = {
    name: "Victoria Freeman",
    title: "Velora Founder",
    bio: "Fashion innovator and trendsetter with a passion for sustainable style.",
  };

  const fashionItems: FashionItem[] = [
    {
      id: 1,
      title: "Top 15 Tops in Fast Fashion",
      description:
        "This season, embrace bold designs and classic styles. Key trends include cropped blouses, knit tank tops, and halter necks. Ruffles, cut-outs, and tie accents bring uniqueness, while vibrant colors, oversized fits, and sheer fabrics add a playful and fresh vibe.",
      category: "tops",
      featured: true,
      imageUrl: "/blog.png",
      author: founder, // Assign author to each blog
    },
    {
      id: 2,
      title: "Top 15 Gowns in Fast Fashion",
      description:
        "This season's gowns feature bold, modern designs with asymmetry, metallic fabrics, and dramatic silhouettes. Off-shoulder styles, high-low hemlines, and cut-out details offer elegance. Sequins, velvet, and satin create luxurious textures, perfect for formal events.",
      category: "gowns",
      featured: true,
      imageUrl: "/blog1.png",
      author: founder, // Assign author to each blog
    },
  ];

  return (
    <div className="bg-[#A69F92]">
      <div className="max-w-6xl mx-auto  px-4 md:px-6 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Fashion Trends</h1>
        </header>

        {/* Responsive Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fashionItems.map((item) => (
            <article
              key={item.id}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              {/* Author (Founder) Section */}
              <div className="mt-6 p-4  rounded-lg">
                <h3 className="text-lg font-semibold">{item.author.title}</h3>
                <p className="text-sm font-medium text-gray-800">
                  {item.author.name}
                </p>
                {item.author.bio && (
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.author.bio}
                  </p>
                )}
              </div>

              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold mt-4 mb-3">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>

              {/* Category & Featured Tags */}
              <div className="mt-4 flex justify-between items-center">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded uppercase font-semibold">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="inline-block bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded font-semibold">
                    Featured
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FashionTrends;
