import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Medhika Mehta",
    rating: 5,
    text: "The location truly deserves every bit of praise. Well my personal favourite set is telephone booth.❤️",
  },
  {
    name: "Muskan Karn",
    rating: 5,
    text: "The entire property is beyond amazing & the staff are also very cooperative & good people. The owner Bhaiya is very professional & a very cool guy.",
  },
  {
    name: "Shreya Mehta",
    rating: 5,
    text: " He has been working very hard to make it easy for us all. Thankyou Bhaiya!!!!",
  },
  {
    name: "Mayur Dhwaj",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste impedit corrupti provident! Aliquid quia, nam vero quos iusto illo debitis! Qui minima veritatis ab amet?!",
  },
  {
    name: "Hritik Ranjan",
    rating: 4,
    text: "LLorem, ipsum dolor sit amet consectetur adipisicing elit. Iste impedit corrupti provident! Aliquid quia, nam vero quos iusto illo debitis! Qui minima veritatis ab amet?!",
  },
  {
    name: "Raiyan Arsh",
    rating: 5,
    text: "They provide you with a variety of sets and each one of them is maintained properly and aesthetics are on point. ",
  },
  {
    name: "Himanshu Gupta",
    rating: 5,
    text: " He has been working very hard to make it easy for us all. Thankyou!!!",
  },
  {
    name: "Amita karn",
    rating: 5,
    text: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
  },
  {
    name: "Tim David",
    rating: 5,
    text: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
  },
  // Add more testimonials as needed
];
export const Home = () => {
  const [userName,setUsername]=useState(localStorage.getItem("username")||"");
  
  

  function scrollDown() {
    window.scrollBy(0, 600);
  }
  return (
    <>
      <Navbar name="sc-none" />
      <div className="banner">
        <div className="banner-info">
          <p>We are the World Best Service Provider.</p>
          <h1>Welcome {userName}, to Best IT Company</h1>
          <p>
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further!
            <p className="none-sm-sc">
              We specialized in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
          </p>
          <div className="btn" style={{ gap: "5px" }}>
            {localStorage.getItem("email") ? (
              <>
                <button className="submit-btn">
                  <NavLink to="/contact">Contact</NavLink>
                </button>
                <button className="submit-btn">
                  <NavLink to="/services">Services</NavLink>
                </button>
              </>
            ) : (
              <>
              <button className="submit-btn">
                <NavLink to="/services">Services</NavLink>
              </button>
              <button className="submit-btn">
                  <NavLink to="/login">Login</NavLink>
                </button>
              </>
            )}
          </div>
          <div class="scroll-downs">
            <div class="mousey" onClick={scrollDown}>
              <div class="scroller"></div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="servives">
        <section class="we-offer-area text-center bg-gray">
          <div class="containerSer">
            <div class="row">
              <div class="col-md-12">
                <div class="site-heading text-center">
                  <h2>
                    What we <span>Offer</span>
                  </h2>
                  <h4>Lorem Ipsum is simply dummy text</h4>
                </div>
              </div>
            </div>
            <div class="row our-offer-items less-carousel">
              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-pen-fancy"></i>
                  <h4>Project creation</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}

              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-dharmachakra"></i>
                  <h4>Develop Software</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}

              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-tasks"></i>
                  <h4>Manage Project</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}

              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-tachometer-alt"></i>
                  <h4>Project Impliment</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}

              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-recycle"></i>
                  <h4>Software Update</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}

              {/* <!-- Single Item --> */}
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-headset"></i>
                  <h4>24/7 Support</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* <!-- End Single Item --> */}
            </div>
          </div>
        </section>
      </div>

      {/* about */}
      <div class="site-heading text-center">
        <h2>
          What People <span>Say</span>
        </h2>
        <h4>Lorem Ipsum is simply dummy text</h4>
      </div>
      <div className="about-testimonials">
        <div className="about-card">
          <div className="about-header">
            <div>
              <p className="about-name">Aman Karn</p>
              <p className="about-message1">Owner</p>
            </div>
          </div>
          <p className="about-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testi-wrapper">
            <div className="testi-carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="carousel__item">
                  <div className="carousel__item-body">
                    <p className="testi-title">
                      {testimonial.name}
                      <span className="gold">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="gold" stroke="gold" />
                        ))}
                      </span>
                    </p>
                    <p className="about-font2">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Me End --> */}
    </>
  );
};
