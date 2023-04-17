import React from "react";
import { Link } from "react-router-dom";
const Blogcard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src="https://media.istockphoto.com/id/1320080508/photo/woman-use-smartphone-control-washer.jpg?s=612x612&w=0&k=20&c=anwpN6yeHPTlbxxDoRxDVBqX7nyg90_Quy05_k2vNZ0="
          alt="Graphics"
          className="img-fluid w-100"
        />
      </div>
      <div className="blog-content">
        <p className="date">11 JUlY 2022</p>
        <h5 className="title">A Beautiful Sunday Ranaissance</h5>
        <p className="desc">JESZqTsXFQjb65LIrkXCfDhVLfuvOxrXLyfamvNM0uaxYevxO8NaE7CT2DsQJ1FsxO4HBkFvga2Uqm3B </p>
        <Link to="blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blogcard;
