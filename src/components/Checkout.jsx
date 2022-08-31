import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout bg-white flex p-[20px] h-max">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner-ad"
          className="w-full"
        />
        {basket?.length === 0 ? (
          <div className="mx-4 py-5 border-b border-gray-300">
            <h2 className="text-2xl font-semibold">
              Your Shopping Basket is empty
            </h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div className="mx-4">
            <h2 className="text-2xl font-semibold py-5 border-b border-gray-300">
              Your Shopping Basket
            </h2>

            {/* List out all of the Checkout Products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket?.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
