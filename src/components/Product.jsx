import React from "react";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product flex flex-col w-full items-center mx-[10px] my-[10px] py-[16px] justify-end bg-white max-h-[400px] min-w-[100px] z-[1]">
      <div className="product__info h-[100px] w-full px-4">
        <p>{props.title}</p>
        <p className="product__price mt-[5px]">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="rating flex">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={props.image}
        alt="img"
        className="w-full max-h-[200px] object-contain mb-[15px] py-4"
      />
      <button
        onClick={addToBasket}
        className="bg-yellow-400 px-3 font-semibold border border-gray-500">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
