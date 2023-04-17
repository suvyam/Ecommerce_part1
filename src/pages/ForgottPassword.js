import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
const ForgottPassword = () => {
  return (
    <>
      <BreadCrumb title={"Forgot-Password"} />
      <div className="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Forget Your Password</h3>
                <p className="text-center text-secondary">We will send You an email to reset Your Password</p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>

                  <div>
                    <div className=" mt-3 d-flex flex-column align-items-center justify-content-center gap-15">
                      <button tye="submit" className="button">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
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

export default ForgottPassword;
