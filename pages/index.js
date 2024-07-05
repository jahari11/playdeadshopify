import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen relative flex flex-col">
        <div className="flex-grow">
          <h1 className="text-center text-green-600 text-[70px] uppercase font-bold mb-8">playdead Worldwide</h1>
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
              <h1 className="text-green-500 md:text-6xl uppercase font-extrabold">EnterHere</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center absolute bottom-0">
          <span className="text-green-600 uppercase md:text-6xl">playdeadworldwide.com</span>
        </div>
    </>
  );
}
