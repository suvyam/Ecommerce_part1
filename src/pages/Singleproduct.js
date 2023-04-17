import React from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../Components/BreadCrumb";
import Productcard from "../Components/Productcard";
import ReactImageZoom from "react-image-zoom";
import { BsHeart, BsShuffle } from "react-icons/bs";

import { useState } from "react";
const Singleproduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,

    img: "https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo=",
  };
  const [orderProduct, setProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                    alt="graphics"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                    alt="graphics"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                    alt="graphics"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                    alt="graphics"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Samsung NOTE-20 PRO with ultra Boost Charging Capacity</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="my-3">
                    <b>$100</b>
                  </p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars count={5} value={4} activeColor="#ffd700" edit={false} />
                    <p className="mb-0">(3 reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Type</h3>
                    <p className="product-data">SmartPhone</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Brand</h3>
                    <p className="product-data">Samsung</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Category</h3>
                    <p className="product-data">Mobile</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">tags</h3>
                    <p className="product-data">SmartPhone</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Avaibility</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size</h3>
                    <div className="d-flex align-items-center gap-15">
                      <span className="badge border  bg-white text-dark border-secondary ">M</span>
                      <span className="badge border  bg-white text-dark border-secondary ">L</span>
                    </div>
                  </div>
                  <div className="d-flex  gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Color</h3>
                    <p className="product-data">Red,Black,Grey</p>
                  </div>
                  <div className="d-flex  gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Quantity</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex align-items-center  gap-15 mt-2 mb-3 ">
                    <h3 className="product-heading mb-0">Quantity</h3>
                    <input
                      type="number"
                      defaultValue={1}
                      name=""
                      className="form-control mb-0 gap-30"
                      min={1}
                      max={10}
                      style={{ width: "80px" }}
                      id=""
                    />
                    <div className=" mt-2 d-flex align-items-center justify-content-center gap-30">
                      <button className="button gap-30 ms-5">Add to Cart</button>
                      <button className="signup button ">Buy now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <div>
                      <a href="" />
                      <BsHeart className="fs-5 me-2" />
                      Add to WishList
                    </div>
                    <div>
                      <a href="" />
                      <BsShuffle className="fs-5 me-2" /> Add to Compare
                    </div>
                  </div>
                  <div className="d-flex  flex-column gap-10 my-3">
                    <h3 className="product-heading">Shipping and Return</h3>
                    <p className="product-data">
                      l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
                    </p>
                  </div>
                  <div className="d-flex align-items-center  gap-10 my-3">
                    <h3 className="product-heading">Copy Product Link</h3>
                    <p className="product-data">
                      <a
                        href="javascript:void(0);"
                        onClick={() => {
                          copyToClipboard(
                            "https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                          );
                        }}
                      >
                        Copy Product Link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="desciption-wrapper py-3 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p>
                    l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzRl01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N
                    Khh76A%^anwpN6yeHPTlbxxDoRxDVBqX7nyg90_Quy05_k2vNZ0
                    6CfXmzWhT7RJFrS3r073mzRl01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
                    lIM0e3ollE0T7 JHDAJD7y9dYG78y97wdybI7YD978y9d9haidu98YQD99dh9ag9798y9iUHKHDGkjhskd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="review-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className=" review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 id="review" className="mb-2">
                        Customer Review
                      </h4>
                      <div className="gap-10 d-flex align-items-center">
                        <ReactStars count={5} size="24" value={4} activeColor="#ffd700" edit={false} />
                        <p className="mb-0">Based on 3 Reviews</p>
                      </div>
                    </div>
                    {orderProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars count={5} size={24} activeColor="#ffd700" />
                      </div>
                      <div>
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>

                      <div>
                        <textarea
                          name=""
                          id=""
                          placeholder="Comments"
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button bg-success ">Submit Review</button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex align-items-center  gap-15">
                        <h4 className="mb-0">Navdeep</h4>
                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      </div>
                      <p className="mt-3">l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR</p>
                      <div className="d-flex align-items-center  gap-15">
                        <h4 className="mb-0">Aman</h4>
                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      </div>
                      <p className="mt-3">l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4>Popular Products</h4>
              </div>
              <Productcard />
              <Productcard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Singleproduct;
