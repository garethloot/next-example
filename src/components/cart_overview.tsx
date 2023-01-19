import { RootState } from "@/store/store";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

type CartOverviewProps = {};

const CartOverview: React.FC<CartOverviewProps> = () => {
  const { cart } = useSelector((state: RootState) => state);
  return (
    <div>
      {cart.items.map((item) => (
        <div key={item.productId}>
          <p>{item.productTitle}</p>
          <button className="btn btn-square">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <p>5</p>
          <button className="btn btn-square">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartOverview;
