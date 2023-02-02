import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Breadcumb from '../Breadcumb/Main'

import BG1 from '../../assets/images/background/slider-2-1.jpg'
import BG2 from '../../assets/images/background/slider-2-2.jpg'
import BG6 from '../../assets/images/projects/project-3-1.jpg'
import BG7 from '../../assets/images/projects/project-3-2.jpg'
import BG8 from '../../assets/images/projects/project-3-3.jpg'
import BG9 from '../../assets/images/projects/project-3-4.jpg'

import PRG1 from '../../assets/project-2-1.jpg'
import PRG2 from '../../assets/project-2-2.jpg'
import PRG3 from '../../assets/project-2-4.jpg'
import PRG4 from '../../assets/project-2-1.jpg'

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
        loop: false,
        nav: false,
        autoWidth: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
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

                    <OwlCarousel className="thm-owl__carousel project-one__carousel thm-owl__carousel--with-shadow" {...projectOptions}>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src={PRG1} alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner" >
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/solution-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/solution-details1" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src={PRG2} alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/solution-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/solution-details2" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-card-one">
                                <div className="project-card-one__image">
                                    <img src={PRG3} alt="" />
                                </div>
                                <div className="project-card-one__content">
                                    <div className="project-card-one__content__inner">
                                        <p className="project-card-one__text">IT Technology Solution</p>
                                        <h3 className="project-card-one__title"><Link to="/solution-details">Data Recovery
                                            Analysis</Link></h3>
                                        <Link to="/solution-details3" className="project-card-one__more">
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}

export default Solution