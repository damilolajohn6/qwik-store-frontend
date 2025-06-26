import React from 'react'
import ListCollections from '@/components/ListCollections'
import ProductCard from '@/components/ProductCard';

import {  getProducts } from '@/lib/actions/actions';

const ProductPage =  async () => {
    const products = await getProducts();
  return (
    <div>
      <ListCollections />
      <div className="bg-[#F7E6E0] flex flex-col items-start gap-6 py-8 px-12 mx-auto">
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage