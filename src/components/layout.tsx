import { Nav } from "./nav";
import { LayoutProps } from "@/types/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "@/store/cart";
import { RootState } from "@/store/store";
import CartOverview from "./cart_overview";
import Head from "next/head";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onHideCart = () => {
    dispatch(hideCart());
  };
  return (
    <div>
      <Nav />
      <main className="drawer drawer-end">
        <input
          id="cart-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={cart.show}
        />
        <div className="drawer-content xl:container xl:mx-auto space-y-4">
          {children}
        </div>
        <div className="drawer-side">
          <label
            onClick={onHideCart}
            htmlFor="cart-drawer"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-96 h-fit bg-base-100 text-base-content">
            <div className="flex items-center">
              <button
                onClick={onHideCart}
                className="btn btn-square btn-outline"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <h1 className="pl-4 text-4xl">Cart overview</h1>
            </div>
            <CartOverview />
          </div>
        </div>
      </main>
    </div>
  );
};
