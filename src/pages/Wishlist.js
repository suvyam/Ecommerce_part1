import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
const Wishlist = () => {
  return (
    <>
      <BreadCrumb title="Wishlit" />
      <div className="wishlist-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="" alt="cross" className="img-fluid w-100 position-absolute" />
                <div className="wishlist-card-image">
                  <img
                    src="https://media.istockphoto.com/id/1220553040/photo/samsung-galaxy-s-20-ultra-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Wj1-tgE6k1wOaZ3dcGRmbCEqm8tQ-pvh_uyju_jgB-Q="
                    className="img-fluid"
                    alt="graphics"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title">Hounor T1 7.0.1GB RAM 8GB ROM...</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="" alt="cross" className="img-fluid w-100 position-absolute" />
                <div className="wishlist-card-image">
                  <img
                    src="https://media.istockphoto.com/id/1190909215/vector/home-screen-smartphone-interface-vector-template.jpg?s=612x612&w=0&k=20&c=S8yFAVKOw8d1h8GCCbRVj23NhboPtNqwRivDB7IbrwI="
                    className="img-fluid"
                    alt="graphics"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title">OPPO A-15 7.0. 2GB RAM 8GB ROM...</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
