import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Blogcard from "../Components/Blogcard";
const SingleBlog = () => {
  return (
    <>
      <BreadCrumb title="Single-Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BsArrowLeft className="fs-4" /> Go back to Blog
                </Link>
                <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                <img
                  src="https://media.istockphoto.com/id/1320080508/photo/woman-use-smartphone-control-washer.jpg?s=612x612&w=0&k=20&c=anwpN6yeHPTlbxxDoRxDVBqX7nyg90_Quy05_k2vNZ0="
                  alt="graphics"
                />
                <p>
                  l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
                  l01RnNEHBCwfEb4dWn8TWOUS6jvlrlavhdE6Xp6T2pnivUzl7N6CfXmzWhT7RJFrS3r073mzR
                  ANd9GcQVgwzDpvDrSYdzwvLBZCVmxOA4Rc_s3v
                  yPJP9Qj2JvLIShjdjFpO8VNwa1Y993XBri8eWQk3uV21nacGnG92uHoJ53cTlSHcricyal
                  JESZqTsXFQjb65LIrkXCfDhVLfuvOxrXLyfamvNM0uaxYevxO8NaE7CT2DsQJ1FsxO4HBkFvga2Uqm3B
                  yPJP9Qj2JvLIShjdjFpO8VNwa1Y993XBri8eWQk3uV21nacGnG92uHoJ53cTlSHcricyal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
