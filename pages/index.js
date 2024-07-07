import Navbar from "@/Components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
<>
<Navbar />
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mx-auto relative flex flex-col">
        <div className="flex-grow">
          <h1 className="text-center text-green-600 text-[50px] uppercase font-bold mb-8">playdead Worldwide</h1>
          <Link href="/products">
            <div className="flex gap-2 justify-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
                <h1 className="text-green-500 md:text-6xl uppercase font-extrabold animate-flash">Enter Here</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-[13rem]">
        <span className="text-green-600 uppercase md:text-6xl">playdeadglobal.com</span>
      </div>
    </div>
    </>
  );
}

