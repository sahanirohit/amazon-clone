import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket...
    console.log(props.id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct flex p-5 bg-white mb-5">
      <img
        src={props.image}
        alt="img "
        className="w-[180px] h-[180px] object-contain"
      />
      <div className="checkoutProduct__info px-5 space-y-2">
        <p className="text-xl font-bold">{props.title}</p>
        <p className="checkoutProduct__price text-xl">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating flex">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="bg-yellow-400 px-3 font-semibold border border-gray-500">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
