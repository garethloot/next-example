import Link from "next/link";
import { NavLink } from "./nav_link";
import NavCart from "./nav_cart";

export const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          App Eitje Dev
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1">
          <li>
            <NavLink href="/products" text="Products" />
          </li>
          <NavCart />
        </div>
      </div>
    </div>
  );
};
