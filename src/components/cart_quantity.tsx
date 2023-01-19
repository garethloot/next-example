import {
  decrimentItemQuantity,
  incrementItemQuantity,
  setItemQuantity,
} from "@/store/cart";
import React from "react";
import { useDispatch } from "react-redux";
import Icon from "./icon";

type CartQuantityProps = {
  quantity: number;
  productId: number;
};

const CartQuantity: React.FC<CartQuantityProps> = ({ quantity, productId }) => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(incrementItemQuantity({ productId: productId }));
  };

  const onDecriment = () => {
    dispatch(decrimentItemQuantity({ productId: productId }));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setItemQuantity({
        productId: productId,
        quantity: Number(event.target.value),
      })
    );
  };

  return (
    <div className="form-control">
      <div className="input-group">
        <button
          className={[
            "btn btn-square btn-sm",
            quantity < 2 ? "btn-disabled" : "",
          ].join(" ")}
          onClick={onDecriment}
        >
          <Icon icon="remove" />
        </button>
        <input
          type="number"
          onChange={onChange}
          min={1}
          className="input input-bordered input-sm w-16 text-center"
          value={quantity}
        />
        <button className="btn btn-square btn-sm" onClick={onIncrement}>
          <Icon icon="add" />
        </button>
      </div>
    </div>
  );
};

export default CartQuantity;
