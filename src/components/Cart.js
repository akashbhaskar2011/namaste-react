import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSLice";

const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
         {cartItems.length !==0   &&
          <button
        onClick={handleClearCart}
        className="mb-6 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-red-600 active:scale-95"
        >
        Clear Cart
        </button>}      
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;