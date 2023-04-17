import React from "react";
import BreadCrumb from "../Components/BreadCrumb";

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrumb title="ShippingPolicy" />
      <div className="shipping-policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
