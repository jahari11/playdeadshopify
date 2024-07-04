import { useCart } from "@/libs/CartContext"
export default function CartPage() {
    const {cart, updateCartQty, removeFromCart} = useCart();

    if (!cart.lineItems || cart.lineItems.length === 0) {
        return <p>Your cart is empty, please shop!</p>;
    }

    const totalPrice = cart.totalPriceV2.amount;
    return (<>
    <h2>Your Cart</h2>
      <ul>
        {cart.lineItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.variant.title}</p>
            <p>{item.quantity} x {item.variant.priceV2.amount} {item.variant.priceV2.currencyCode}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateCartQty(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 mt-2">Remove</button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-8">
        <h3>Total: {totalPrice} {cart.currencyCode}</h3>
      </div>
      <div className="flex justify-end">
        <a href={cart.webUrl} className="bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium">Checkout</a>
      </div>
    </>)
}