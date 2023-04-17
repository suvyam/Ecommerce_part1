import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../Components/BreadCrumb";
import Productcard from "../Components/Productcard";

const OurStore = () => {
  const [grid, setgrid] = useState(4);

  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By Categories</h3>

                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="filter-title">Avaibility</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      In Stock(0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      Out Of Stock(0)
                    </label>
                  </div>
                  <h5 className="filter-title">Price</h5>
                  <div className="d-flex align-items center gap-10">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-titles">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-titles">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        S(3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        S(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items centers gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Randome Product</h3>
                <div className="randome-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
                      alt="graphics"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Best home Music Speaker With High bass </h5>
                    <ReactStars count={5} value={4} size={24} activeColor="#ffd700" />
                    <b>$300</b>
                  </div>
                </div>
                <div className="randome-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
                      alt="graphics"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Best home Music Speaker With High bass </h5>
                    <ReactStars count={5} value={4} size={24} activeColor="#ffd700" />
                    <b>$300</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select id="" name="" className="form-control form-select">
                      <option value="title-descending">Alphbatically,Z-A</option>
                      <option value="Best Selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="price-ascending">Price,low to high</option>
                      <option value="price-descending">Price,high to low</option>
                      <option value="created-ascending">Date,old to new</option>
                      <option value="created-descending">Date,new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts">21 Products</p>
                    <div className="d-flex align-items-center  gap-10 grid">
                      <img
                        src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
                        onClick={() => {
                          setgrid(3);
                        }}
                        alt="graphics"
                        className="d-block img-fluid"
                      />
                      <img
                        src=""
                        alt="graphics"
                        onClick={() => {
                          setgrid(4);
                        }}
                        className="d-block img-fluid"
                      />
                      <img
                        src=""
                        alt="graphics"
                        onClick={() => {
                          setgrid(6);
                        }}
                        className="d-block img-fluid"
                      />
                      <img
                        src=""
                        alt="graphics"
                        onClick={() => {
                          setgrid(12);
                        }}
                        className="d-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <Productcard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default OurStore;
