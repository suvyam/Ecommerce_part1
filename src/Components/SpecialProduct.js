import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 my-2 ">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="product-image">
              <img
                src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                alt="grap"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Harvel</h5>
              <h6 className="titles">Samsung Galaxy NOTE-20</h6>
              <ReactStars value={3} count={5} size={24} activeColor="#ffd700" />
              <p className="red.p">
                <span>$100.676 </span>&nbsp;<strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex align-items-center gap-10">
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>
                </div>
              </div>
              <div>
                <p className="pro-count">Products 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-label="Basic example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="button-cart mt-2">
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 my-2 ">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="product-image">
              <img
                src="https://media.istockphoto.com/id/96826250/photo/digital-camera-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ceAF827zi_UfczajJAWkXowWxdu5tfisZHRoCiSq94w="
                alt="grap"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Harvel</h5>
              <h6 className="titles">Samsung Galaxy NOTE-20</h6>
              <ReactStars value={3} count={5} size={24} activeColor="#ffd700" />
              <p className="red.p">
                <span>$100.676 </span>&nbsp;<strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex align-items-center gap-10">
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>
                </div>
              </div>
              <div>
                <p className="pro-count">Products 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-label="Basic example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="button-cart mt-2">
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 my-2 ">
        <div className="special-product-card">
          <div className="d-flex justify-content-between ">
            <div className="product-image">
              <img
                src="https://media.istockphoto.com/id/498569393/photo/windows-8-1-on-hp-pavilion-ultrabook.jpg?s=612x612&w=0&k=20&c=kmqDUy2J3YpPwp3vVJCIZnidDFc9BvYPWDD0Vnf4GzQ="
                alt="grap"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Harvel</h5>
              <h6 className="titles">Samsung Galaxy NOTE-20</h6>
              <ReactStars value={3} count={5} size={24} activeColor="#ffd700" />
              <p className="red.p">
                <span>$100.676 </span>&nbsp;<strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex align-items-center gap-10">
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>
                </div>
              </div>
              <div>
                <p className="pro-count">Products 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-label="Basic example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="button-cart mt-2">
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 my-2 ">
        <div className="special-product-card">
          <div className="d-flex justify-content-between ">
            <div className="product-image">
              <img
                src="https://media.istockphoto.com/id/498569393/photo/windows-8-1-on-hp-pavilion-ultrabook.jpg?s=612x612&w=0&k=20&c=kmqDUy2J3YpPwp3vVJCIZnidDFc9BvYPWDD0Vnf4GzQ="
                alt="grap"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Harvel</h5>
              <h6 className="titles">Samsung Galaxy NOTE-20</h6>
              <ReactStars value={3} count={5} size={24} activeColor="#ffd700" />
              <p className="red.p">
                <span>$100.676 </span>&nbsp;<strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex align-items-center gap-10">
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>:
                  <span className="badge rounded-circle p-3 bg-warning">1</span>
                </div>
              </div>
              <div>
                <p className="pro-count">Products 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-label="Basic example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="button-cart mt-2">
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
