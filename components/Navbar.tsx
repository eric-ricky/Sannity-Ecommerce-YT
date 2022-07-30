import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Phonnix</Link>
      </p>

      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
        {/* <span className="cart-item-qty">{totalQuantities}</span> */}
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
