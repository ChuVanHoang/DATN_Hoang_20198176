import { useState } from "react";
import LoginForm from "../forms/login-form";

const CheckoutLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tp-checkout-verify-item">
      <p className="tp-checkout-verify-reveal">
        Bạn đã có tài khoản?{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="tp-checkout-login-form-reveal-btn"
        >
          Đăng nhập ngay
        </button>
      </p>

      {isOpen && (
        <div id="tpReturnCustomerLoginForm" className="tp-return-customer">
          <LoginForm needRedirect={false}/>
        </div>
      )}
    </div>
  );
};

export default CheckoutLogin;
