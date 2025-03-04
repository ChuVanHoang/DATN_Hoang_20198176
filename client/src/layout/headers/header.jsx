import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import logo_white from "@assets/img/logo/logo-w.svg";
import logo_dark from "@assets/img/logo/logo-black.svg";
import { CartTwo, Menu, Search, Wishlist } from "@/svg";
import Menus from "./header-com/menus";
import useSticky from "@/hooks/use-sticky";
import SearchBar from "./header-com/search-bar";
import OffCanvas from "@/components/common/off-canvas";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import useCartInfo from "@/hooks/use-cart-info";
import { openCartMini } from "@/redux/features/cartSlice";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="tp-header-bottom-3 pl-35 pr-35">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo" style={{ width: '200px' }}>
                    <Link href="/">
                      <Image
                        width="200"
                        height="35"
                        className="logo-light"
                        src={logo_white}
                        alt="logo"
                      />
                      <Image className="logo-dark" src={logo_dark} alt="logo"  width="200"
                        height="35"/>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu menu-style-3 p-relative d-flex align-items-center justify-content-center">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
                    <div className="tp-header-action-item d-none d-sm-block">
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        type="button"
                        className="tp-header-action-btn tp-search-open-btn"
                      >
                        <Search />
                      </button>
                    </div>
                    <div className="tp-header-action-item d-none d-sm-block">
                      <Link href="/wishlist" className="tp-header-action-btn">
                        <Wishlist />
                        <span className="tp-header-action-badge">
                          {wishlist.length}
                        </span>
                      </Link>
                    </div>
                    <div className="tp-header-action-item d-none d-sm-block">
                      <button
                        onClick={() => dispatch(openCartMini())}
                        type="button"
                        className="tp-header-action-btn cartmini-open-btn"
                      >
                        <CartTwo />
                        <span className="tp-header-action-badge">
                          {quantity}
                        </span>
                      </button>
                    </div>

                      {user ? (
                        <>
                          <div className="tp-header-action-item">
                            <Link href='/calendar' className="tp-header-action-btn cartmini-open-btn">
                              <i className="fa-regular fa-calendar"></i>
                            </Link>
                          </div>

                          <div className="tp-header-action-item">
                            <Link href='/profile' className="tp-header-action-btn cartmini-open-btn">
                              <i className='fa-regular fa-user-pen'></i>
                            </Link>
                          </div>
                        </>
                      ) : (
                          <>
                            <div className="tp-header-action-item">
                              <Link href='/login' className="tp-header-action-btn cartmini-open-btn">
                                <i className="fa-solid fa-right-to-bracket"></i>
                              </Link>
                            </div>
                          </>
                      )}


                    <div className="tp-header-action-item d-lg-none">
                      <button
                        onClick={() => setIsCanvasOpen(true)}
                        type="button"
                        className="tp-header-action-btn tp-offcanvas-open-btn"
                      >
                        <Menu />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search bar start */}
      <SearchBar
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {/* search bar end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsCanvasOpen={setIsCanvasOpen}
        categoryType="beauty"
      />
      {/* off canvas end */}
    </>
  );
};

export default Header;
