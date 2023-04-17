import React from "react";
import BreadCrumb from "../Components/BreadCrumb";

const Resetpassword = () => {
  return (
    <>
      <BreadCrumb title={"Reset-Password"} />
      <div className="resetpassword-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>

                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="Password" name="password" placeholder="password" className="form-control" />
                  </div>
                  <div>
                    <input type="cpassword" name="cpassword" placeholder="Confirm Password" className="form-control" />
                  </div>

                  <div>
                    <div className=" mt-3 d-flex  flex-column align-items-center justify-content-center gap-15">
                      <button className="button">Ok</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
