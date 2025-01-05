import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import Menus from "./header-com/menus";
import logo from "@assets/img/logo/logo-black.svg";
import useSticky from "@/hooks/use-sticky";
import useCartInfo from "@/hooks/use-cart-info";
import { openCartMini } from "@/redux/features/cartSlice";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import {
  CartTwo,
  Menu,
  Wishlist,
  Search,
} from "@/svg";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import OffCanvas from "@/components/common/off-canvas";
const HeaderTwo = ({ style_2 = false }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state?.auth);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { setSearchText, handleSubmit, searchText } = useSearchFormSubmit();
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div
          className={`tp-header-area tp-header-style-${
            style_2 ? "primary" : "darkRed"
          } tp-header-height`}
        >
          {/* <div className="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-header-info d-flex align-items-center">
                    <div className="tp-header-info-item">
                      <a href="tel:0988888888">
                        <span>
                          <PhoneTwo />
                        </span>{" "}
                        +(84) 988 888 888
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            id="header-sticky"
            className={`tp-header-bottom-2 tp-header-sticky ${
              sticky ? "header-sticky" : ""
            }`}
          >
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-5 col-md-5 col-sm-4 col-6">
                    <div className="logo" style={{ width: '200px'}}>
                      <Link href="/">
                        <Image src={logo} alt="logo" priority width={200} height={35}/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-5 d-none d-xl-block">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-7 col-md-7 col-sm-8 col-6">
                    <div className="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                      <div className="tp-header-search-2 d-none d-sm-block">
                        <form onSubmit={handleSubmit}>
                          <input
                            onChange={(e) => setSearchText(e.target.value)}
                            value={searchText}
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                          />
                          <button type="submit">
                            <Search />
                          </button>
                        </form>
                      </div>
                      <div className="tp-header-action d-flex align-items-center ml-30">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                              href="/wishlist"
                              className="tp-header-action-btn"
                          >
                            <Wishlist/>
                            <span className="tp-header-action-badge">
                              {wishlist.length}
                            </span>
                          </Link>
                        </div>
                        <div className="tp-header-action-item">
                          <button
                              onClick={() => dispatch(openCartMini())}
                              className="tp-header-action-btn cartmini-open-btn"
                          >
                            <CartTwo/>
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


                        <div className="tp-header-action-item tp-header-hamburger mr-20 d-xl-none">
                          <button
                              onClick={() => setIsCanvasOpen(true)}
                              type="button"
                              className="tp-offcanvas-open-btn"
                          >
                            <Menu/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini sidebar start */}
      <CartMiniSidebar/>
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas
          isOffCanvasOpen={isOffCanvasOpen}
          setIsCanvasOpen={setIsCanvasOpen}
          categoryType="fashion"
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;
