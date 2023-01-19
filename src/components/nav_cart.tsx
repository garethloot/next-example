import { toPrice } from "@/helpers/to_price";
import { showCart } from "@/store/cart";
import { RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type NavCartProps = {};

const NavCart: React.FC<NavCartProps> = () => {
  const { cart } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onShowCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(showCart());
    let targetEl = event.currentTarget;
    if (targetEl && targetEl.matches(":focus")) {
      setTimeout(function () {
        targetEl.blur();
      }, 0);
    }
  };

  const itemsCount = cart.items.length;
  const totalPrice = toPrice(cart.totalPrice, "nl-NL", "EUR");
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="badge badge-sm indicator-item">{itemsCount}</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{itemsCount} Items</span>
          <span className="text-info">Subtotal: {totalPrice}</span>
          <div className="card-actions">
            <button onClick={onShowCart} className="btn btn-primary btn-block">
              View cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCart;
