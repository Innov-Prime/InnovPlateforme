import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../../assets/images/background/service-1-bg-1.png'
import BG2 from '../../../assets/images/shapes/about-three-s-1.png'
import BG3 from '../../../assets/images/shapes/testi-bg-2-1.png'
import Breadcumb from '../../Breadcumb/Main'
import { Parallax } from 'react-parallax'

const CyberSecurity = () => {
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    margin: 30,
    items: 2,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 30,
        items: 2
      },
      375: {
        margin: 30,
        items: 2
      },
      575: {
        margin: 30,
        items: 3
      },
      767: {
        margin: 50,
        items: 4
      },
      991: {
        margin: 40,
        items: 5
      },
      1199: {
        margin: 80,
        items: 5
      }
    }
  }
  return (
    <>
     <div class="container mt-5">
      <Breadcumb Title=" Cyber Security" Breadcumb="SERVICES"  />
      <section className="section-padding--top section-padding--bottom about-two ">
        

        
      </section>
      </div>
            <section className="black-bg cta-two">
                <Parallax bgImage={BG1} bgImageAlt="" className="cta-two__bg section-padding-lg--top section-padding-lg--bottom" strength={300}>
                    <div className="container">
                        <div className="cta-two__inner">
                            <h3 className="cta-two__title">Better IT Solutions And Services
                                At Your <span>Fingertips</span></h3>
                            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
                        </div>
                    </div>
                </Parallax>
            </section>
          

      <section
        className="section-padding--bottom section-padding--top gray-bg testimonials-one background-repeat-no background-position-top-center"
        style={{ backgroundImage: `url(${BG3})` }}>
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Our clients</p>
            <h2 className="section-title__title">Trusted Worldwide Peoples</h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">On the other hand denounc with ghteo
                    indignation and dislike men who so beguiled and demoralized the charms of pleasure
                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                  <h3 className="testimonials-one-card__title">Michal Rahul</h3>
                  <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">On the other hand denounc with ghteo
                    indignation and dislike men who so beguiled and demoralized the charms of pleasure
                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                  <h3 className="testimonials-one-card__title">Jessica Brown</h3>
                  <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="client-carousel">
        <div className="container">
          <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <section className="cta-one">
          <div className="container">
              <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
                  <div className="cta-one__circle"></div>
                  <div className="section-title ">
                      <p className="section-title__text">Need Any Technology Solution</p>
                      <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
                  </div>
                  <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link>
              </div>
          </div>
      </section>
    </>
  )
}

export default CyberSecurity