import React from "react";
import ErrorMsg from "../common/error-msg";
import { useSelector } from "react-redux";

const CheckoutBillingArea = ({ register, errors }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="tp-checkout-bill-area">
      <h3 className="tp-checkout-bill-title">Thông tin hóa đơn</h3>

      <div className="tp-checkout-bill-form">
        <div className="tp-checkout-bill-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Họ <span>*</span>
                </label>
                <input
                    {...register("firstName", {
                      required: `Vui lòng nhập vào họ của bạn!`,
                    })}
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Họ"
                    defaultValue={user?.firstName}
                />
                <ErrorMsg msg={errors?.firstName?.message}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Tên <span>*</span>
                </label>
                <input
                    {...register("lastName", {
                      required: `Vui lòng nhập vào tên của bạn!`,
                    })}
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Tên"
                />
                <ErrorMsg msg={errors?.lastName?.message}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Tỉnh/Thành phố <span>*</span>
                </label>
                <input
                    {...register("country", {required: `Vui lòng nhập vào tỉnh/thành phố!`})}
                    name="country"
                    id="country"
                    type="text"
                    placeholder="Hà nội"
                />
                <ErrorMsg msg={errors?.lastName?.message}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Quận/Huyện <span>*</span></label>
                <input
                    {...register("city", {required: `Vui lòng nhập vào quận/huyện!`})}
                    name="city"
                    id="city"
                    type="text"
                    placeholder="City"
                />
                <ErrorMsg msg={errors?.city?.message}/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>ZIP code</label>
                <input
                    {...register("zipCode", {required: false})}
                    name="zipCode"
                    id="zipCode"
                    type="text"
                    placeholder="111111"
                />
                <ErrorMsg msg={errors?.zipCode?.message}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Địa chỉ chi tiết</label>
                <input
                    {...register("address", {required: `Vui lòng nhập vào Địa chỉ chi tiết!`})}
                    name="address"
                    id="address"
                    type="text"
                    placeholder=""
                />
                <ErrorMsg msg={errors?.address?.message}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Số điện thoại <span>*</span>
                </label>
                <input
                    {...register("contactNo", {
                      required: `Vui lòng nhập vào số điện thoại!`,
                    })}
                    name="contactNo"
                    id="contactNo"
                    type="text"
                    placeholder="Phone"
                />
                <ErrorMsg msg={errors?.contactNo?.message}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Email <span>*</span>
                </label>
                <input
                    {...register("email", {required: `Vui lòng nhập vào địa chỉ Email`})}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    defaultValue={user?.email}
                />
                <ErrorMsg msg={errors?.email?.message}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Ghi chú (optional)</label>
                <textarea
                    {...register("orderNote", {required: false})}
                    name="orderNote"
                    id="orderNote"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBillingArea;
