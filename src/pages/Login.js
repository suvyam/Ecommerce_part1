import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";

const Login = () => {
  return (
    <>
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="email" name="email" placeholder="email" className="form-control" />
                  </div>
                  <div className="mt-1">
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className=" mt-3 d-flex align-items-center justify-content-center gap-15">
                      <button className="button">Login</button>
                      <Link to="/signup" className="signup button">
                        Signup
                      </Link>
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

export default Login;
