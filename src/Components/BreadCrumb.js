import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = (props) => {
  return (
    <div className="BreadCrumb py-4">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                Home
              </Link>
              /{props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
