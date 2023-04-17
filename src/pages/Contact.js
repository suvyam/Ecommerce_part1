import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
const Contact = () => {
  return (
    <>
      <BreadCrumb title={"Contact"} />
      <div className="contact-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10994.81259587746!2d75.78757360761331!3d26.910773650963115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4724e5ec9e3%3A0x56645834dbfd34d6!2sibis%20Jaipur%20Civil%20Lines!5e0!3m2!1sen!2sin!4v1678810822039!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex align-items-center justify-content-between">
                <div>
                  <h2 className="contact-title">Contact Us</h2>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile" />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Comments"
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                      />
                    </div>
                    <div>
                      <button className="button bg-danger">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h2 className="contact-title">Get in Touch with us</h2>
                  <div>
                    <ul>
                      <li>33 New Montgermeny St. Ste 750 San Francisco Ca , USA 94105</li>
                      <li>(+91)723-4608</li>
                      <li>demo@gmail.com</li>
                      <li>Monday-Friday 10AM - 8PM</li>
                    </ul>
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

export default Contact;
