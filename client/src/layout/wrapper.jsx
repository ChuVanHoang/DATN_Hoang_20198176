import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import BackToTopCom from "@/components/common/back-to-top";
import ProductModal from "@/components/common/product-modal";
import {
  get_cart_products,
  initialOrderQuantity,
} from "@/redux/features/cartSlice";
import { get_wishlist_products } from "@/redux/features/wishlist-slice";
import { get_compare_products } from "@/redux/features/compareSlice";
import useAuthCheck from "@/hooks/use-auth-check";
import Loader from "@/components/loader/loader";

const Wrapper = ({ children }) => {
  const { productItem } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();
  const authChecked = useAuthCheck();

  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
    dispatch(get_compare_products());
    dispatch(initialOrderQuantity());
  }, [dispatch]);

  return !authChecked ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Loader spinner="fade" loading={!authChecked} />
    </div>
  ) : (
      <div id="wrapper">
        {children}
        <BackToTopCom/>
        <ToastContainer/>
        <div className="extension">
          <div className="extension-icon">
            <a href="tel:0398361510" target="_blank">
              <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1">
                <circle cx="256" cy="256" fill="#2196f3" r="256"/>
                <path
                    d="m412.424 349.946-.273.688c-2.577 6.578-5.166 13.149-7.88 19.677-2.331 5.61-4.743 11.241-7.408 16.7-1.593 3.26-4.116 8.409-6.676 10.969a51.473 51.473 0 0 1 -8.588 6.928c-17.86 11.431-40.186 9.82-59.813 4.557-84.306-22.585-196.673-134.952-219.26-219.257-5.26-19.633-6.868-41.965 4.574-59.825a50.861 50.861 0 0 1 6.914-8.577c2.557-2.56 7.712-5.082 10.969-6.675 5.465-2.665 11.1-5.077 16.71-7.408 6.525-2.7 13.1-5.3 19.673-7.88l.685-.264a15.416 15.416 0 0 1 19.044 6.655l32.593 56.466a15.517 15.517 0 0 1 -5.66 21.128c-11.529 6.661-20.727 17.023-23.444 30.311a44.606 44.606 0 0 0 8.22 36.581 347.09 347.09 0 0 0 32.12 36.355 347.2 347.2 0 0 0 36.363 32.125 44.586 44.586 0 0 0 36.584 8.221c13.276-2.714 23.65-11.918 30.306-23.447a15.508 15.508 0 0 1 21.122-5.66l56.46 32.6a15.413 15.413 0 0 1 6.665 19.032z"
                    fill="#fff" fill-rule="evenodd"/>
              </svg>
            </a>
          </div>

          <div className="extension-icon">
            <a href="https://www.messenger.com/t/101039392912440" role="button" target="_blank">
              <svg enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_1"/>
                <g id="Layer_2">
                  <g>
                    <path d="m50 2.5c-58.892 1.725-64.898 84.363-7.46 95h7.46 7.46c57.451-10.647 51.419-93.281-7.46-95z"
                          fill="#1877f2"/>
                    <path
                        d="m57.46 64.104h11.125l2.117-13.814h-13.242v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021v-11.761c-12.894-2.323-28.385-1.616-28.722 17.66v10.529h-12.123v13.814h12.123v33.396h7.46 7.46z"
                        fill="#f1f1f1"/>
                  </g>
                </g>
              </svg>
            </a>
          </div>

          <div className="extension-icon">
            <a href="https://zalo.me/0398361510" role="button" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M22.782 0.166016H27.199C33.2653 0.166016 36.8103 1.05701 39.9572 2.74421C43.1041 4.4314 45.5875 6.89585 47.2557 10.0428C48.9429 13.1897 49.8339 16.7347 49.8339 22.801V27.1991C49.8339 33.2654 48.9429 36.8104 47.2557 39.9573C45.5685 43.1042 43.1041 45.5877 39.9572 47.2559C36.8103 48.9431 33.2653 49.8341 27.199 49.8341H22.8009C16.7346 49.8341 13.1896 48.9431 10.0427 47.2559C6.89583 45.5687 4.41243 43.1042 2.7442 39.9573C1.057 36.8104 0.166016 33.2654 0.166016 27.1991V22.801C0.166016 16.7347 1.057 13.1897 2.7442 10.0428C4.43139 6.89585 6.89583 4.41245 10.0427 2.74421C13.1707 1.05701 16.7346 0.166016 22.782 0.166016Z"
                      fill="#0068FF"/>
                <path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd"
                      d="M49.8336 26.4736V27.1994C49.8336 33.2657 48.9427 36.8107 47.2555 39.9576C45.5683 43.1045 43.1038 45.5879 39.9569 47.2562C36.81 48.9434 33.265 49.8344 27.1987 49.8344H22.8007C17.8369 49.8344 14.5612 49.2378 11.8104 48.0966L7.27539 43.4267L49.8336 26.4736Z"
                      fill="#001A33"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.779 43.5892C10.1019 43.846 13.0061 43.1836 15.0682 42.1825C24.0225 47.1318 38.0197 46.8954 46.4923 41.4732C46.8209 40.9803 47.1279 40.4677 47.4128 39.9363C49.1062 36.7779 50.0004 33.22 50.0004 27.1316V22.7175C50.0004 16.629 49.1062 13.0711 47.4128 9.91273C45.7385 6.75436 43.2461 4.28093 40.0877 2.58758C36.9293 0.894239 33.3714 0 27.283 0H22.8499C17.6644 0 14.2982 0.652754 11.4699 1.89893C11.3153 2.03737 11.1636 2.17818 11.0151 2.32135C2.71734 10.3203 2.08658 27.6593 9.12279 37.0782C9.13064 37.0921 9.13933 37.1061 9.14889 37.1203C10.2334 38.7185 9.18694 41.5154 7.55068 43.1516C7.28431 43.399 7.37944 43.5512 7.779 43.5892Z"
                      fill="white"/>
                <path
                    d="M20.5632 17H10.8382V19.0853H17.5869L10.9329 27.3317C10.7244 27.635 10.5728 27.9194 10.5728 28.5639V29.0947H19.748C20.203 29.0947 20.5822 28.7156 20.5822 28.2606V27.1421H13.4922L19.748 19.2938C19.8428 19.1801 20.0134 18.9716 20.0893 18.8768L20.1272 18.8199C20.4874 18.2891 20.5632 17.8341 20.5632 17.2844V17Z"
                    fill="#0068FF"/>
                <path d="M32.9416 29.0947H34.3255V17H32.2402V28.3933C32.2402 28.7725 32.5435 29.0947 32.9416 29.0947Z"
                      fill="#0068FF"/>
                <path
                    d="M25.814 19.6924C23.1979 19.6924 21.0747 21.8156 21.0747 24.4317C21.0747 27.0478 23.1979 29.171 25.814 29.171C28.4301 29.171 30.5533 27.0478 30.5533 24.4317C30.5723 21.8156 28.4491 19.6924 25.814 19.6924ZM25.814 27.2184C24.2785 27.2184 23.0273 25.9672 23.0273 24.4317C23.0273 22.8962 24.2785 21.645 25.814 21.645C27.3495 21.645 28.6007 22.8962 28.6007 24.4317C28.6007 25.9672 27.3685 27.2184 25.814 27.2184Z"
                    fill="#0068FF"/>
                <path
                    d="M40.4867 19.6162C37.8516 19.6162 35.7095 21.7584 35.7095 24.3934C35.7095 27.0285 37.8516 29.1707 40.4867 29.1707C43.1217 29.1707 45.2639 27.0285 45.2639 24.3934C45.2639 21.7584 43.1217 19.6162 40.4867 19.6162ZM40.4867 27.2181C38.9322 27.2181 37.681 25.9669 37.681 24.4124C37.681 22.8579 38.9322 21.6067 40.4867 21.6067C42.0412 21.6067 43.2924 22.8579 43.2924 24.4124C43.2924 25.9669 42.0412 27.2181 40.4867 27.2181Z"
                    fill="#0068FF"/>
                <path
                    d="M29.4562 29.0944H30.5747V19.957H28.6221V28.2793C28.6221 28.7153 29.0012 29.0944 29.4562 29.0944Z"
                    fill="#0068FF"/>
                <script xmlns=""/>
              </svg>
            </a>
          </div>
        </div>
        {productItem && <ProductModal/>}
      </div>
  );
};

export default Wrapper;
