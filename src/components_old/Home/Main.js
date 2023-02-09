import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import BGImg from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG1 from '../../assets/images/background/slider-2-1.jpg'
import BG2 from '../../assets/images/background/slider-2-2.jpg'
import BG3 from '../../assets/images/shapes/about-seven-bg-1-1.png'
import BG4 from '../../assets/images/shapes/testi-bg-2-1.png'
import BGImg1 from '../../assets/images/background/slider-1-1.jpg'
import BGImg2 from '../../assets/images/background/slider-1-2.jpg'
import BGImg3 from '../../assets/images/shapes/service-four-bg-1-1.png'
import BGImg4 from '../../assets/images/shapes/funfact-one-bg.png'
import BGImg5 from '../../assets/images/shapes/testi-bg-1-1.png'
import BGImg6 from '../../assets/images/shapes/team-home-bg-1-1.jpg'
import BGImg7 from '../../assets/images/shapes/about-three-s-1.png'
import img1 from '../../assets/images/resources/about-five-1-1.jpg'
import img2 from '../../assets/images/resources/about-five-1-2.jpg'
import AnimatedNumber from "animated-number-react"
import { Parallax } from 'react-parallax'


// IMPORTATION DU FICHIER CSS PERSONNALISE

import style from '../../assets/customStyle.css'

import HomeImg1 from "../../assets/home-img-1.jpg"
import ClientFoot from "../../assets/client-foot.png"


const Home = () => {

    const [ytShow, setytShow] = useState(false)
    const options = {
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            576: {
                margin: 30,
                items: 2
            },
            768: {
                margin: 30,
                items: 3
            },
            992: {
                margin: 30,
                items: 4
            },
            1200: {
                margin: 30,
                items: 5
            }
        },
    };
    const sliderOptions = {
        loop: true,
        items: 1,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }
    const projectOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
        margin: 0,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            768: {
                margin: 30,
                items: 2
            },
            992: {
                margin: 30,
                items: 3
            }
        }
    }
    const logoOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
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
            <div className="slider-one slider-two">
                <ul className="slider-two__social">
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                </ul>
                <OwlCarousel className="slider-one__carousel owl-theme thm-owl__carousel" {...sliderOptions}>
                    <div className="item slider-one__slide-1">
                        <div className="slider-one__bg" style={{ backgroundImage: `url(${BG1})` }}>
                        </div>
                        <div className="slider-one__shape-1"></div>
                        <div className="container">
                            <div className="slider-one__content ">
                                <div className="slider-one__title-wrapper">
                                    <h2 className="slider-one__title">IT Solutions <br />
                                        to Grow <span>Your</span> <br />
                                        Business</h2>
                                </div>
                                <div className="slider-one__btns">
                                    <Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item slider-one__slide-2">
                        <div className="slider-one__bg" style={{ backgroundImage: `url(${BG2})` }}>
                        </div>
                        <div className="slider-one__shape-1"></div>
                        <div className="container">
                            <div className="slider-one__content ">
                                <div className="slider-one__title-wrapper">
                                    <h2 className="slider-one__title">IT Solutions <br />
                                        to Grow <span>Your</span> <br />
                                        Business</h2>
                                </div>
                                <div className="slider-one__btns">
                                    <Link to="/about" className="thm-btn slider-one__btn"><span>Learn More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>


            <section className="section-padding--bottom section-padding--top">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card-two gray-bg">
                                <h3 className="service-card-two__title"><Link to="/service-01">Quality Service</Link></h3>
                                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                                </p>
                                <div className="service-card-two__icon">
                                    <i className="icon-smart-tv"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card-two gray-bg">
                                <h3 className="service-card-two__title"><Link to="/team">Expert Team</Link></h3>
                                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                                </p>
                                <div className="service-card-two__icon">
                                    <i className="icon-link"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card-two gray-bg">
                                <h3 className="service-card-two__title"><Link to="/contact">Excellent Support</Link></h3>
                                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                                </p>
                                <div className="service-card-two__icon">
                                    <i className="icon-technical-support"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="service-card-two gray-bg">
                                <h3 className="service-card-two__title"><Link to="/about">Management</Link></h3>
                                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                                </p>
                                <div className="service-card-two__icon">
                                    <i className="icon-cctv"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-padding--bottom about-six">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-six__content">
                                <div className="section-title">
                                    <p className="section-title__text">Welcome to tech</p>
                                    <h2 className="section-title__title">Best Talent, Competitive
                                        Cast, Incredible IT Service
                                        Infrastructure</h2>
                                </div>
                                <div className="about-six__text">System is a term used to refer to an organized collection
                                    symbols and processes that may be used to operate on such symbols. Perspiciatis unde
                                    omnis natus error voluptatems accusa.</div>
                                <ul className="about-six__list">
                                    <li className="about-six__list__item">
                                        <i className="far fa-check-circle about-six__list__icon"></i>
                                        <h3 className="about-six__list__title count-box"><span className="count-text"
                                        ><AnimatedNumber value={769} duration={1500} formatValue={(v) => Math.round(v)} /></span>
                                        </h3>
                                        <div className="about-six__list__text">Satisfied Clients</div>
                                    </li>
                                    <li className="about-six__list__item">
                                        <i className="far fa-check-circle about-six__list__icon"></i>
                                        <h3 className="about-six__list__title count-box"><span className="count-text"
                                        ><AnimatedNumber value={825} duration={1500} formatValue={(v) => Math.round(v)} /></span>
                                        </h3>
                                        <div className="about-six__list__text">Projects Relased</div>
                                    </li>
                                </ul>
                                <div className="about-six__btns">
                                    <Link to="/about" className="thm-btn"><span>learn more</span></Link>
                                    <Link to="/service-01" className="about-six__link">
                                        How it Work
                                        <i className="fa fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-six__images wow fadeInUp" data-wow-duration="1500ms">
                                <img src={HomeImg1} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section-padding--bottom section-padding--top gray-bg testimonials-one background-repeat-no background-position-top-center"
                style={{ backgroundImage: `url(${BG4})` }}>
                <div className="container">
                    <div className="section-title text-center">
                        <p className="section-title__text">Our clients</p>
                        <h2 className="section-title__title">Trusted Worldwide Peoples</h2>
                    </div>

                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators" style={{marginBottom: "-50px"}}>
                            <button type="button" style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "blue" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "blue" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "blue" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
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
                            <div class="carousel-item">
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
                            <div class="carousel-item">
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding--top section-padding--bottom service-three black-bg"
                style={{ backgroundImage: `url(${BG3})` }}>
                <div className="container">
                    <div className="service-three__block">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-title">
                                    <p className="section-title__text">What We offier</p>
                                    <h2 className="section-title__title section-title__title--light">Help you Overcome your
                                        Technology Challenges</h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="service-three__block__text">Accusa ntium doloremque laudantium totam rem
                                    aperiamea
                                    queipsa quae abillo inventore veritatis.</div>
                            </div>
                        </div>
                    </div>
                    <ul className="service-three__list">
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="000ms">
                            <i className="icon-coding service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">Website</Link></h3>
                        </li>
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="100ms">
                            <i className="icon-apple service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">IOS</Link></h3>
                        </li>
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="200ms">
                            <i className="icon-android service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">Android</Link></h3>
                        </li>
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="300ms">
                            <i className="icon-iot service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">IOT</Link></h3>
                        </li>
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="400ms">
                            <i className="icon-smartband service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">Wearalables</Link></h3>
                        </li>
                        <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
                            data-wow-delay="500ms">
                            <i className="icon-tv service-three__list__icon"></i>
                            <h3 className="service-three__list__title"><Link to="#">TV</Link></h3>
                        </li>
                    </ul>
                </div>
            </section>



            <section className="section-padding--bottom section-padding--top background-size-cover gray-bg work-process">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="section-title__text">OUR WORKING PROCESS</p>
                        <h2 className="section-title__title">Driving Client Results Utilizing New <br />Innovation Points of view
                        </h2>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="000ms">
                            <div className="work-process-card-one">
                                <div className="work-process-card-one__count"></div>
                                <h3 className="work-process-card-one__title"><Link to="/about">End to End <br />
                                    Solutions & Services
                                    Guaranteed</Link></h3>
                                <div className="work-process-card-one__text">We help transform the world’s most important
                                    businesses into vigorous organizations that </div>
                                <Link className="work-process-card-one__link" to="/about">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="100ms">
                            <div className="work-process-card-one">
                                <div className="work-process-card-one__count"></div>
                                <h3 className="work-process-card-one__title"><Link to="/service-01">Ahead of The Curve
                                    We Future-proof
                                    Your IT Solution</Link></h3>
                                <div className="work-process-card-one__text">We help transform the world’s most important
                                    businesses into vigorous organizations that </div>
                                <Link className="work-process-card-one__link" to="/service-01">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div className="work-process-card-one">
                                <div className="work-process-card-one__count"></div>
                                <h3 className="work-process-card-one__title"><Link to="/contact">Experience
                                    Certainty Every
                                    Project Executed</Link></h3>
                                <div className="work-process-card-one__text">We help transform the world’s most important
                                    businesses into vigorous organizations that </div>
                                <Link className="work-process-card-one__link" to="/contact">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta-one cta-one--home-three mb-5">
                <div className="container">
                    <div className="cta-one__inner  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="cta-one__circle"></div>
                        <div className="section-title ">
                            <h2 className="section-title__title section-title__title--light">Ready to Get Free Consulations <br />
                                for Any Kind of it Solutions?</h2>
                        </div>
                        <div className="cta-one--home-three__btns">
                            <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Get A Quote</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="client-carousel client-carousel--two">
                <div className="container">
                    <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientFoot} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>

        </>
    )
}

export default Home