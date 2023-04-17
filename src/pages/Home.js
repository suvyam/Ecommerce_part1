import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../Components/Blogcard";
import Productcard from "../Components/Productcard";

import SpecialProduct from "../Components/SpecialProduct";
import Container from "./Container";

const Home = () => {
  return (
    <>
      <Container className="home-wrapper-1 py-5"></Container>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-12">
            <div className="service d-flex align-items-center justify-content-between">
              <div>
                <i className="bi bi-truck text-white" />
                <h6>Free Shipping</h6>
                <p className="mb-0">From all Offers-over 3400</p>
              </div>
              <div className="d-flex align-items-center gap-10">
                <i className="bi bi-gift-fill  " />
                <div>
                  <h6>Daily Suprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <i className="bi bi-headset" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Ship with expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <i className="bi bi-patch-check" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">get Favrable Prices</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <i className="bi bi-calendar3-range-fill" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% preferd Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 third">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Computer & Laptops</h6>
                    <p>18 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/482875484/vector/edgeless-ultra-thin-high-definition-television-set-in-black.jpg?s=612x612&w=0&k=20&c=WlEPeTJnvuIE_Q_rPNTvEZ4ICaKAzaHapyCk9VpsnnY="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1126089066/photo/camera-vintage-in-store.jpg?s=612x612&w=0&k=20&c=FVIKeD-DYh2OmWBFFYlJkIezIEiWsqO7oRYjxVeU9WY="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>4 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/530010099/photo/video-game-controller.jpg?s=612x612&w=0&k=20&c=UZd4vtMgOXRH-HBfClKOIrwxe3xlRI_P7OL5M7p4oNY="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Smart television</h6>
                    <p>12 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/536248577/photo/lcd-smart-tv.jpg?s=612x612&w=0&k=20&c=YHM0kAk2772HHkqSHNTAgIN66QOKWdQ3urD6OPDqw2Q="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>15 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/469328286/photo/smartwatch.jpg?s=612x612&w=0&k=20&c=Uns1U2fjc0M5DIzxW8qo8Wm_K7afxfNlwRWaiXs46PM="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Mobile & Tablets</h6>
                    <p>8 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=0&k=20&c=2h5Q46wh-eRyPwh4KKnJhCKFWqcd2ltgv9tdaULDdbc="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?s=612x612&w=0&k=20&c=Xs150nT8O2jHQJ3tSA221BKFy--xHwfLd_kVYVGUgTY="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Accessories</h6>
                    <p>4 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1185463126/photo/blank-promotional-wireless-earbuds-with-box-package-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=JU9VLe0WbVJj2T1JWl4CEroeHOGuZgBgpoguwAjRHx0="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>11 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1335374517/vector/black-bluetooth-speaker-with-power-blue-lead-on-white-background-eps10-vector-illusration.jpg?s=612x612&w=0&k=20&c=FJHzQf24mszeen0xJJz_NQdrm89sGau_CiYJM-_-y9o="
                    alt="graphics"
                    className="cam"
                  />
                </div>
                <div className="d-flex align-items-center gap-30 som">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>150 Items</p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/520221509/photo/retro-toaster.jpg?s=612x612&w=0&k=20&c=sh3TzmydpjxVKWCxZ940zdh8fEK_Wkpwmvlb_QY0m10="
                    alt="graphics"
                    className="cam"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
              <h3 className="heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Popular Products</h4>
            </div>
            <Productcard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgwzDpvDrSYdzwvLBZCVmxOA4Rc_s3v-1uA&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss ">
                    <img
                      src="data:image/png;base64,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"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOFk0UnV9QhedxZCeARptRcAegQmyMgzVBw&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR8XZWI-o0SI4HIcPxKktsn8C9thXKYyORA&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaJekuIbR5O3OgUxL0kbECh8A4lNfSyyyHg&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP94kZEHgYGq5XGVsoFgw1oGMGGCe0qyNzWw&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOYrxOF1Pk69pB0Gn0d71jqhx8vhxacSSdg&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                  <div className="mx-4 w-25 toss">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJodRwE3RTSSEoXdLXtF52omWgZ_EGFvp3Kg&usqp=CAU"
                      alt="brands"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="heading">Featured Collection</h3>
            <Productcard />
          </div>
        </div>
      </section>
      <section className="Famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <h3 className="m-3">Famous Products</h3>
          <div className="row">
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                  alt="graphics"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watche Series 7</h6>
                  <p>From $399 or $16.6 for 24mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img
                  src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                  alt="graphics"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inch 5k ratina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img
                  src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                  alt="graphics"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>SMARTPHONE</h5>
                  <h6>SMARTPHONE 13 PRO</h6>
                  <p>From $999 or $41.6 for 24mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img
                  src="https://media.istockphoto.com/id/1295358144/photo/a-black-display-of-a-mobile-phone-next-to-a-lying-stylus-samsung-galaxy-note-20-smartphone.jpg?s=612x612&w=0&k=20&c=Nkp8hblBcCY2Tlffk6w0jX47BBqz36qURjq8JJ7_tQo="
                  alt="graphics"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>HOME SPEAKERS</h5>
                  <h6>Room-filling sound</h6>
                  <p>From $699 or $116.46 for 12mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
