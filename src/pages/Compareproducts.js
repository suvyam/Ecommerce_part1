import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Cross } from "react-icons";
const Compareproducts = () => {
  return (
    <>
      <BreadCrumb title={"Compare-Products"} />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="" alt="cross" className="position-absolute img-fluid cross" />
                <div className="compare-product-image">
                  <img
                    src="https://media.istockphoto.com/id/620370548/photo/wireless-speaker-for-mobile-phone-speaker-for-smartphone.jpg?s=612x612&w=0&k=20&c=dVPoH2RVv0x2T-UfjyiTpoDKOb4Flnx-gLqlDNOJYBA="
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Kids Headphones bulk 10 pack multi colored for students</h5>
                  <h6 className="price mb-3">$33.2</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Sony</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Speakers</p>
                    </div>
                    <div className="product-detail">
                      <h5>SKU:</h5>
                      <p>SKU005</p>
                    </div>
                    <div className="product-detail">
                      <h5>Avaibility:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p>R,G,W</p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <p>S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="" alt="cross" className="position-absolute img-fluid cross" />
                <div className="compare-product-image">
                  <img
                    src="https://media.istockphoto.com/id/1190909215/vector/home-screen-smartphone-interface-vector-template.jpg?s=612x612&w=0&k=20&c=S8yFAVKOw8d1h8GCCbRVj23NhboPtNqwRivDB7IbrwI="
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Hounor T1 7.0.1GB RAM 8GB ROM...</h5>
                  <h6 className="price mb-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>smartphone</p>
                    </div>
                    <div className="product-detail">
                      <h5>SKU:</h5>
                      <p>SKU025</p>
                    </div>
                    <div className="product-detail">
                      <h5>Avaibility:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p>B,R,G</p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <p>M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compareproducts;
