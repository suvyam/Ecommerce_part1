import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 bg-white">
              <div className="check-left-data">
                <h3 className="website-name">Developer</h3>
                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-Label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/cart" className="text-dark">
                        Cart
                      </a>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item  " aria-current="page">
                      <a href="/shipping-policy" className="text-dark">
                        Shipping
                      </a>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active " aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="username">Navdeep Dhaiya (demo@gamil.com)</p>
                <form action="" className="d-flex flex-wrap justify-content-between gap-15">
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option value="selected disabled">Select Country</option>
                      <option value="selected disabled">USA</option>
                    </select>
                  </div>
                  <div>
                    <input className="form-control  flex-grow-1" placeholder="First name" />
                  </div>
                  <div>
                    <input className="form-control flex-grow-1" placeholder="Lastname(Optional)" />
                  </div>
                  <div className="w-100">
                    <input className="form-control" placeholder="Address"></input>
                  </div>
                  <div className="w-100">
                    <input className="form-control" placeholder="Apartment,suit,etc.(Optional)"></input>
                  </div>
                  <div className=" flex-grow-1">
                    <input className=" form-control" placeholder="City"></input>
                  </div>
                  <div className=" flex-grow-1">
                    <select className=" form-control form-select" placeholder="State">
                      <option value="selected disabled"> State</option>
                      <option>Indiana</option>
                    </select>
                  </div>
                  <div className=" flex-grow -1">
                    <input className=" form-control" placeholder="ZIP Code"></input>
                  </div>
                  <div className="w-100">
                    <div className="d-flex align-items-end justify-content-end flex-column">
                      <Link to="/cart" className="d-flex align-self-start gap-10">
                        <BiArrowBack className=" fs-5 ms-1 d-flex align-self-center" /> Return to Cart
                      </Link>
                      <Link to="/cart" className="button bg-success">
                        Continue Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4 d-flex justify-content-between align-items-center ">
                <div className="d-flex">
                  <img
                    src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
                    className="img-fluid w-25"
                    alt="graphics"
                  />
                  <div className="d-flex flex-column">
                    <h5 className="title">Bluetooth Speaker</h5>
                    <p className="mb-0">Ultra Sound Speaker with Ultra bass</p>
                    <p className="mb-0">Size:M</p>
                    <p className="mb-0">Color:Black</p>
                  </div>
                </div>
                <div>
                  <h5 className="mb-0">$500</h5>
                </div>
              </div>
              <div className="border-bottom py-4 d-flex justify-content-between align-items-center ">
                <div className="d-flex">
                  <img
                    src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
                    className="img-fluid w-25"
                    alt="graphics"
                  />
                  <div className="d-flex flex-column">
                    <h5 className="title">Bluetooth Speaker</h5>
                    <p className="mb-0">Ultra Sound Speaker with Ultra bass</p>
                    <p className="mb-0">Size:M</p>
                    <p className="mb-0">Color:Black</p>
                  </div>
                </div>
                <div>
                  <h5 className="mb-0">$500</h5>
                </div>
              </div>
              <div className=" py-4">
                <div className="d-flex align-items-center justify-content-between ">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0">$1000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between border-bottom py-4 mb-0">
                  <p>Shipping</p>
                  <p>$1000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between ">
                  <h4>Total</h4>
                  <h5>$1000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
