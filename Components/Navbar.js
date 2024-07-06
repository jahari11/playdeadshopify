import Link from "next/link"


export default function Navbar() {
    return (
    <div className="p-4">
    <h1 className="text-green-500 text-center uppercase text-2xl">playdead global</h1>
    <nav>
    <div class="container flex items-center justify-center p-6 mx-auto gap-10">
        <Link href="/" class="text-green-500 hover:text-green-600 uppercase">home</Link>
        <Link href="/products" class="text-green-500 hover:text-green-600 uppercase">Shop</Link>
        <Link href="/contact" class="text-green-500 hover:text-green-600 uppercase">contact</Link>
        <Link href="/cart" class="text-red-500 hover:text-red-600 uppercase">cart 🛒</Link>
    </div>
</nav>
</div>
)
}
