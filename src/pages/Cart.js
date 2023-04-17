import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper homer-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-5 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-5 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      src="https://media.istockphoto.com/id/620370548/photo/wireless-speaker-for-mobile-phone-speaker-for-smartphone.jpg?s=612x612&w=0&k=20&c=dVPoH2RVv0x2T-UfjyiTpoDKOb4Flnx-gLqlDNOJYBA="
                      className="img-fluid"
                      alt="graphics"
                    />
                  </div>
                  <div>
                    <h5 className="title">High Sound Quality And Ultra Bass</h5>
                    <p className="color">Color:Pink</p>
                    <p className="size">Size:M</p>
                  </div>
                </div>
                <div className="cart-col-2 ">
                  <b>$100</b>
                </div>
                <div className="cart-col-3 d-flex  align-items-center gap-15 ">
                  <input type="number" defaultValue={1} min={1} max={10} id="" className="form-control" />
                  <div>
                    <AiFillDelete className="text-danger " />
                  </div>
                </div>

                <div className="cart-col-4">$100</div>
              </div>
              <div className="cart-data py-5 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      src="https://media.istockphoto.com/id/620370548/photo/wireless-speaker-for-mobile-phone-speaker-for-smartphone.jpg?s=612x612&w=0&k=20&c=dVPoH2RVv0x2T-UfjyiTpoDKOb4Flnx-gLqlDNOJYBA="
                      className="img-fluid"
                      alt="graphics"
                    />
                  </div>
                  <div>
                    <h5 className="title">High Sound Quality And Ultra Bass</h5>
                    <p className="color">Color:Pink</p>
                    <p className="size">Size:M</p>
                  </div>
                </div>
                <div className="cart-col-2 ">
                  <b>$100</b>
                </div>
                <div className="cart-col-3 d-flex  align-items-center gap-15 ">
                  <input type="number" defaultValue={1} min={1} max={10} id="" className="form-control" />
                  <div>
                    <AiFillDelete className="text-danger " />
                  </div>
                </div>

                <div className="cart-col-4">$100</div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between">
                <div>
                  <Link to="/products" className="button">
                    Continue to Shoping
                  </Link>
                </div>

                <div>
                  <h4>SubTotal: $200</h4>
                  <p>Taxes and Shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
