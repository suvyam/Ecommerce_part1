import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center ">
            <div className="col-5">
              <div className="header-top-data d-flex gap-30 align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cursor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                </svg>
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address.."
                  aria-label="Your Email Address.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <p className="text-white">Demo Store</p>
                <p className="text-white">
                  No. 1234 Freedom New York,1111 <br />
                  United State
                </p>
                <p className="text-white">+41 872368623</p>
                <p className="text-white">DemoExample.com</p>
                <div className="d-flex align-items-center flex-row">
                  <a className="text-white p-2" href="www.facebook.com">
                    <AiFillFacebook />
                  </a>
                  <a className="text-white p-2" href="www.instagrame.com">
                    <AiFillInstagram />
                  </a>
                  <a className="text-white p-2" href="www.twitter.com">
                    <AiFillTwitterCircle />
                  </a>
                  <a className="text-white p-2 gap-30" href="www.youtub.com">
                    <AiFillYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="term-condition" className="text-white py-2 mb-1">
                  Terms of Service
                </Link>
                <Link to="blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Content</Link>
                <Link className="text-white py-2 mb-1">Sue Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Copy:{new Date().getFullYear()}:Powered By Developers Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
