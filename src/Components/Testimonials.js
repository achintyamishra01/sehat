import React from "react";

export default function Testimonials() {
  return (
    <section id="Testimonial">

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <h1 className="section-header">What People Say's</h1>
        <div className="testimonial-view">
          {/* Use Bootstrap class */}
          <div
            className="carousel slide"
            id="testimonialCarousel"
            data-ride="carousel"
          ></div>
          <div className="carousel-inner">
            {/* client1 */}
            <div className="carousel-item active">
              <div className="block">
                <div className="row">
                  <div className="col-md-5">
                    <div className="user">
                      <div className="image">
                        <img
                          src={require("../images/jonathan.png")}
                          alt="client2"
                        />
                      </div>
                      <div className="info">
                        <h2 className="user-name">Mark Smith</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content">
                      <p className="test-para">
                        HealthTrack has proven very useful. Now I can access the
                        test results on my phone without needing to carry
                        physical reports. The graphical analysis is easier to
                        understand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* client 2 */}
            <div className="carousel-item">
              <div className="block">
                <div className="row">
                  <div className="col-md-5">
                    <div className="user">
                      <div className="image">
                        <img
                          src={require("../images/Arundhati.png")}
                          alt="client2"
                        />
                      </div>
                      <div className="info">
                        <h2 className="user-name">Arundhati</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content">
                      <p className="test-para">
                        As a doctor, I find Healthtrack useful not just for
                        people but also for doctors because observing the
                        graphical representation of test reports allows us to
                        analyse the trends more effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* client3 */}
            <div className="carousel-item ">
              <div className="block">
                <div className="row">
                  <div className="col-md-5">
                    <div className="user">
                      <div className="image">
                        <img
                          src={require("../images/kritika.png")}
                          alt="client3"
                        />
                      </div>
                      <div className="info">
                        <h2 className="user-name">Kritika</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content">
                      <p className="test-para">
                        HealthTrack allows me to access test results from four
                        to five years ago on my phone in a convenient and
                        organized way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
