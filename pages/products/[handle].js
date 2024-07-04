import { client } from "@/libs/shopify";
import { useState } from 'react';
import { useCart } from "@/libs/CartContext";

export default function ProductPage({ product }) {
  console.log({product})
  const {addToCart} = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleVariantChange = (event) => {
    const selectedVariant = product.variants.find(variant => variant.id === event.target.value);
    setSelectedVariant(selectedVariant);
  };

  const handleAddToCart = async () => {
    await addToCart({
      variantId:selectedVariant.id,
      quantity,
    });
    alert(`Added ${quantity} of ${selectedVariant.title} to the cart.`)
  };



  return (
    
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase">{product.title}</h1>
      </div>
      <div className="flex flex-col items-center">
        {selectedVariant.image && (
          <div className="w-full max-w-md mb-8">
            <img
              src={selectedVariant.image.src}
              alt={selectedVariant.image.altText || "Product image"}
              width={500}
              height={500}
              className="object-cover object-center"
            />
          </div>
        )}
        <div className="w-full max-w-md">
          <p className="text-xl font-semibold mb-4 text-center">
            {selectedVariant.priceV2.amount} {selectedVariant.priceV2.currencyCode}
          </p>
          <p>{product.description}</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleVariantChange}
              value={selectedVariant.id}
            >
              {product.variants.map(variant => (
                <option key={variant.id} value={variant.id}>{variant.title}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              min="1"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-indigo-700"
            onChange={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const product = await client.product.fetchByHandle(params.handle);
  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}