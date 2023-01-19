import { toPrice } from "@/helpers/to_price";
import { removeItem } from "@/store/cart";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import CartQuantity from "./cart_quantity";
import Icon from "./icon";
import Image from "next/image";

type CartOverviewProps = {};

const CartOverview: React.FC<CartOverviewProps> = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state);

  const onRemove = (productId: number) => {
    dispatch(removeItem({ productId: productId }));
  };

  const totalPrice = toPrice(cart.totalPrice, "nl-NL", "EUR");
  return (
    <div className="mt-8">
      {cart.items.map((item, index) => {
        const totalItemPrice = toPrice(item.totalPrice, "nl-NL", "EUR");
        return (
          <>
            <div key={item.productId} className="flex items-center">
              <div className="w-16 h-16 relative mr-4 mt-2">
                <Image
                  src={item.productThumnail}
                  fill
                  alt={item.productTitle}
                />
              </div>

              <div className="flex-grow">
                <p className="text-xl mb-2">{item.productTitle}</p>
                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-square btn-sm btn-error"
                    onClick={() => onRemove(item.productId)}
                  >
                    <Icon icon="delete" />
                  </button>
                  <CartQuantity
                    quantity={item.quantity}
                    productId={item.productId}
                  />
                  <p>{totalItemPrice}</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </>
        );
      })}
      <div className="flex items-center justify-between">
        <h1>Total price</h1>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartOverview;
