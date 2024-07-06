
import { client } from "@/libs/shopify";
import Link from "next/link";

export default function Shop({ products }) {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" text-center text-white uppercase mb-8 text-5xl">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.handle}`} className="group">
              <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.images[0]?.src || "placeholder.jpg"}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <span className="text-green-600 uppercase text-lg">See more</span>
                </div>
              </div>
              <h3 className="mt-4 text-md text-green-600 uppercase">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                {product.variants[0]?.priceV2?.amount
                  ? `$${product.variants[0].priceV2.amount} ${product.variants[0].priceV2.currencyCode}`
                  : "Price not available"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const products = await client.product.fetchAll();
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}

