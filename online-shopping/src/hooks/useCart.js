import { useCartContext } from "../context/CartContext";

const useCart = () => {
  const { cartItems, addToCart, removeFromCart, updateQty } =
    useCartContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQty,
    totalPrice,
    totalItems,
  };
};

export default useCart;
