import { UseCart } from "../context/useCart";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { cart } = UseCart();

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};
