import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          width={400}
          height={200}
          src={product.image}
          alt={product.name}
          class="rounded shadow"
        />
      </Link>
      <div class="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 class="text-lg">{product.name}</h2>
        </Link>
        <p class="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button class="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
