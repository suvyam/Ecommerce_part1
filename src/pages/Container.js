import React from "react";
import { Link } from "react-router-dom";
const Container = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="main-banner position-relative p-3">
          <img
            src="https://media.istockphoto.com/id/1300324580/photo/young-pink-hair-girl-listening-music-in-headphones.jpg?s=612x612&w=0&k=20&c=s5uzZVD3_07W2fcFsjgg5ZyfIpNavOM0jIeafNm3Nak="
            className="img-fluid rounded-3"
            alt="graphics"
          />
          <div className="main-banner-content position-absolute">
            <h4>SUPER CHARGED FOR PROPS</h4>
            <h5>I-Pad S13+ Pro</h5>
            <p>From $999.00 or $41.62 </p>
            <Link className="button">BUY NOW</Link>
          </div>
        </div>
      </div>
      <div className=" position-relative  col-6">
        <div className="d-flex flex-wrap  justify-content-space-between">
          <div className="small-banner position-relative p-3 pops ">
            <img
              src="https://media.istockphoto.com/id/629626192/photo/woman-with-macbook-and-ipad-pro-with-social-service-twitter.jpg?s=612x612&w=0&k=20&c=6NF1FRw816LX0mDOBO9k94mE8iXhA53URSeqSVGGYCg="
              className="img-fluid rounded-3"
              alt="graphics"
            />
            <div className="small-banner-content position-absolute ">
              <h4>BEST SALE</h4>
              <h5>Laptop Max</h5>
              <p>From $1699.00 or $62.62/mo </p>
            </div>
          </div>
          <div className="small-banner position-relative p-3 pops">
            <img
              src="https://media.istockphoto.com/id/1323415169/photo/the-ipad-air-2020-tablet-in-black-color-lies-on-a-branded-box-on-a-white-isolated-background.jpg?s=612x612&w=0&k=20&c=QYjrjFUzQYsUj0UREU4rq0n6kvfgf9cGAIsAqcc6wSE="
              className="img-fluid rounded-3"
              alt="graphics"
            />
            <div className="small-banner-content position-absolute">
              <h4>NEW ARIVAL</h4>
              <h5>I-Pad Air</h5>
              <p>From $599.00 or $49 /mo </p>
            </div>
          </div>
          <div className="small-banner position-relative p-3 pops">
            <img
              src="https://media.istockphoto.com/id/1193632218/photo/samsung-galaxy-watch-active.jpg?s=612x612&w=0&k=20&c=-HQtl1XPCgsNERAybp1SQ-fZzgVrXx9sirUY996rjbY="
              className="img-fluid rounded-3"
              alt="graphics"
            />
            <div className="small-banner-content position-absolute">
              <h4>15% OFF</h4>
              <h5>Smartwatch-7</h5>
              <p>Shop the latest brands style and color </p>
            </div>
          </div>
          <div className="small-banner position-relative p-3 pops">
            <img
              src="https://media.istockphoto.com/id/1196604953/photo/airpods-pro-and-iphone-11pro-max.jpg?s=612x612&w=0&k=20&c=KIUi1eAhXurjF1l-Cw4W-ahfrluBpllopsGWmuCFnvs="
              className="img-fluid rounded-3"
              alt="graphics"
            />
            <div className="small-banner-content position-absolute">
              <h4>Free EndRaving </h4>
              <h5>AirPods Max</h5>
              <p>High flexiblity playback and ultra-low distortion </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
