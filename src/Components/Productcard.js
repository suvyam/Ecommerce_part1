import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const Productcard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="pro-card position-relative">
          <div className="card-img">
            <button>01
              
            </button>
            <img
              src="https://media.istockphoto.com/id/860853774/photo/blue-headphones-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=KqMSLWuM_Prrq5XHTe79bnFRU_leFDaXTuKqup5uvrE="
              alt="product"
              className="img-fluid first"
            />
            <img
              src="https://media.istockphoto.com/id/158424572/vector/headphones.jpg?s=612x612&w=0&k=20&c=lIM0e3ollE0T7-xFtS6uXiR_n1Rrj3NxEp9bo8pnEGo="
              alt="product"
              className="img-fluid second"
            />
          </div>
          <div className="pro-content">
            <h6 className="brands">Havels</h6>
            <h5 className="titile">Kids Headphones bulk 10 pack multi colored for students</h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
            </p>
            <p className="price">$33.2</p>
            <div className=" action-bar positon-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="pro-card">
          <div className="card-img">
            <img
              src="https://media.istockphoto.com/id/620370548/photo/wireless-speaker-for-mobile-phone-speaker-for-smartphone.jpg?s=612x612&w=0&k=20&c=dVPoH2RVv0x2T-UfjyiTpoDKOb4Flnx-gLqlDNOJYBA="
              alt="product"
              className="img-fluid first"
            />
            <img
              src="https://media.istockphoto.com/id/1199491696/photo/portable-bluetooth-speaker-with-silicone-handle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ceZ6_4CeAvqqk0jawDYOpRpd3qrlxj7GdjG7_nFVfWk="
              alt="product"
              className="img-fluid second"
            />
          </div>
          <div className="pro-content">
            <h6 className="brands">Boat</h6>
            <h5 className="titile">Best Sound Produt with Flexible Vibration Absorbe </h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
            </p>
            <p className="price">$16.72</p>
            <div className=" action-bar positon-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="pro-card">
          <div className="card-img">
            <img
              src="https://media.istockphoto.com/id/603887954/photo/classic-look-digital-camera.jpg?s=612x612&w=0&k=20&c=Q8Ezde9o9sK5bVAsc9-9ntTAi90DWK6ZoR4dd2S41Pk="
              alt="product"
              className="img-fluid first"
            />
            <img
              src="https://media.istockphoto.com/id/452103175/photo/digital-video-camera.jpg?s=612x612&w=0&k=20&c=MIaDjpF6tJ9flW_ur7rxbt4bqMq9vj1IQOFkUs9oOLs="
              alt="product"
              className="img-fluid second"
            />
          </div>
          <div className="pro-content">
            <h6 className="brands">Sony</h6>
            <h5 className="titile">Olympus Pen #-PL9 Kit With 14-42 EZ Lens Camera </h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
            </p>
            <p className="price">$12.2</p>
            <div className=" action-bar positon-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div to=":id" className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="pro-card">
          <div className="card-img">
            <img
              src="https://media.istockphoto.com/id/1190909215/vector/home-screen-smartphone-interface-vector-template.jpg?s=612x612&w=0&k=20&c=S8yFAVKOw8d1h8GCCbRVj23NhboPtNqwRivDB7IbrwI="
              alt="product"
              className="img-fluid first"
            />
            <img
              src="https://media.istockphoto.com/id/1220553040/photo/samsung-galaxy-s-20-ultra-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Wj1-tgE6k1wOaZ3dcGRmbCEqm8tQ-pvh_uyju_jgB-Q="
              alt="product"
              className="img-fluid second"
            />
          </div>
          <div className="pro-content">
            <h6 className="brands">Samsung</h6>
            <h5 className="titile">Hounor T1 7.0.1GB RAM 8GB ROM...</h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
              l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
            </p>
            <p className="price">$100</p>
            <div className=" action-bar positon-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Productcard;
