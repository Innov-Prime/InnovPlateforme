import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Breadcumb from '../Breadcumb/Main'


import BG1 from '../../assets/project-2-1.jpg'
import BG2 from '../../assets/project-2-2.jpg'
import BG3 from '../../assets/project-2-4.jpg'

import { Parallax } from 'react-parallax'

const Solution = () => {

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

    const projectOptions = {
        loop: true,
        nav: true,
        autoWidth: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: true,
        margin: 10,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 10,
                items: 1,
                autoWidth: false
            },
            768: {
                margin: 10,
                items: 2,
                autoWidth: false
            },
            992: {
                margin: 10,
                items: 3
            },
            1200: {
                margin: 10,
                items: 4
            }
        }
    }

    return (
        <>
            <Breadcumb Title="Nos solutions" Breadcumb="SOLUTIONS" />

            <section className="cta-one about-four section-padding--top">
                <div className="container">
                    <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
                        <div className="cta-one__circle"></div>
                        <div className="section-title ">
                            <p className="section-title__text">Need Any Technology Solution</p>
                            <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-sm btn-light  cta-one__btn">
                                <Link to="/contact" className=""><span>Start Now</span></Link>
                            </button>
                            <button type="button" className="btn btn-sm btn-light  cta-one__btn" style={{ marginLeft: "10px", }}>
                                <Link to="/contact" className=""><span>Start Now</span></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding--bottom section-padding--top project-one">
                <div className="container">
                    <div className="project-one__top">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-title ">
                                    <p className="section-title__text">Latest Project</p>
                                    <h2 className="section-title__title">Check We Have Solution <br />Done IT Project</h2>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="project-one__top__content">
                                    <p className="project-one__top__text">Pellentesque Viverra Eget Velit A Tincidunt. Sed
                                        Mattis Enim Nisl, Sit Amet Malesuada Sapien Pulvinar Ut.</p>
                                    <div className="project-one__top__btns">
                                        <Link to="/realisations" className="thm-btn project-one__top__btn">
                                            <span>Voir toutes nos réalisations</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section-padding--bottom section-padding--top">
                        <div className="container">
                            <div className="row gutter-y-30">
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="project-card-one">
                                        <div className="project-card-one__image">
                                            <img src={BG1} alt="" />
                                        </div>
                                        <div className="project-card-one__content">
                                            <div className="project-card-one__content__inner">
                                                <p className="project-card-one__text">IT Technology Solution</p>
                                                <h3 className="project-card-one__title"><Link to="/realisation-details1">Data Recovery
                                                    Analysis</Link></h3>
                                                <Link to="/realisation-details1" className="project-card-one__more">
                                                    <i className="fa fa-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="100ms">
                                    <div className="project-card-one">
                                        <div className="project-card-one__image">
                                            <img src={BG2} alt="" />
                                        </div>
                                        <div className="project-card-one__content">
                                            <div className="project-card-one__content__inner">
                                                <p className="project-card-one__text">IT Technology Solution</p>
                                                <h3 className="project-card-one__title"><Link to="/realisation-details2">Data Recovery
                                                    Analysis</Link></h3>
                                                <Link to="/realisation-details2" className="project-card-one__more">
                                                    <i className="fa fa-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="200ms">
                                    <div className="project-card-one">
                                        <div className="project-card-one__image">
                                            <img src={BG3} alt="" />
                                        </div>
                                        <div className="project-card-one__content">
                                            <div className="project-card-one__content__inner">
                                                <p className="project-card-one__text">IT Technology Solution</p>
                                                <h3 className="project-card-one__title"><Link to="/realisation-details3">Data Recovery
                                                    Analysis</Link></h3>
                                                <Link to="/realisation-details3" className="project-card-one__more">
                                                    <i className="fa fa-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Solution