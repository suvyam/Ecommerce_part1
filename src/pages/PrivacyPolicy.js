import React from "react";
import BreadCrumb from "../Components/BreadCrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <BreadCrumb title="PrivacyPolicy" />
      <div className="privacy-policy-wrapper home-wrapper-2 py-5">
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

export default PrivacyPolicy;
