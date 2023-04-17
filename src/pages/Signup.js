import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <BreadCrumb title={"Signup"} />
      <div className="signup-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Your Account</h3>

                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="name" name="name" placeholder="Name" className="form-control" />
                  </div>

                  <div>
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div>
                    <input type="tel" name="mobile" placeholder="Mobile Number" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="password" placeholder="password" className="form-control" />
                  </div>

                  <div>
                    <div className=" mt-3 d-flex  flex-column align-items-center justify-content-center gap-15">
                      <button className="button">Signup</button>
                      <Link to="/login">Already an Account?</Link>
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

export default Signup;
