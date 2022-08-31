import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal flex flex-col w-[300px] h-[150px] p-[20px] bg-[#f3f3f3] rounded-md border border-gray-200 justify-between">
      <CurrencyFormat
        decimalScale={2}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} : items) : {<strong>{value}</strong>}
            </p>
            <small className="subtotal_gift flex items-center">
              <input type="checkbox" name="check" className="" id="checkbox" />{" "}
              <span className="ml-2">This order contain a gift</span>
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="bg-yellow-400 py-1 font-semibold border border-gray-400">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
