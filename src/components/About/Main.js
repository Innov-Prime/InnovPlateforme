import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG2 from '../../assets/images/shapes/testi-bg-1-1.png'

import ClientImg from '../../assets/client-foot.png'

import Breadcumb from '../Breadcumb/Main'
import { Parallax } from 'react-parallax'

const About = () => {
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
            <Breadcumb Title="A Propos" Breadcumb="A PROPOS" />
            <section className="about-four section-padding--top">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-four__image">
                                <img src="assets/images/resources/about-four-1-1.jpg" className="wow fadeInUp"
                                    data-wow-duration="1500ms" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-four__content">
                                <div className="section-title ">
                                    <p className="section-title__text">Qui sommes-nous?</p>
                                    <h2 className="section-title__title">
                                        Faire du numérique un levier de croissance des PME et PMI en Afrique.
                                </h2>
                                </div>
                                <div className="about-four__text">
                                    Innov'Prime est l'entité technologique de la société à 
                                    responsabilité limitée SunWin N°RCCM RB/ABC/22 B 5713, avec un capital de 5.000.000 F CFA créée depuis 02 ans.<br/>

                                    Nous avons pour mission de faire du numérique un levier de croissance des PME et PMI en Afrique. 
                                    Nous accompagnons les entreprises dans leur transformation digitale à travers nos différents services et programmes que nous déployons.

                                </div>

                                <div className="about-four__meta">
                                    <div className="about-four__author">
                                        <img src="assets/images/resources/about-four-author-1.jpg" alt="" />
                                        <div className="about-four__author__content">
                                            <h3 className="about-four__author__title">Sunwin</h3>
                                            <div className="about-four__author__designation">Fièrement propulser par Sunwin</div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="thm-btn about-four__btn"><span>Nous contacter</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding--bottom section-padding--top">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="section-title__text">Notre équipe</p>
                        <h2 className="section-title__title">Nous sommes des talents/experts <br /> engagés à vos côtés.</h2>

                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-1.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Michelle Monaghan</Link></h3>
                                    <p className="team-card-one__designation">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-2.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Jessica Brown</Link></h3>
                                    <p className="team-card-one__designation">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-3.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Kevin Martin</Link></h3>
                                    <p className="team-card-one__designation">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-card-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="team-card-one__image">
                                    <img src="assets/images/team/team-2-4.jpg" alt="" />
                                    <div className="team-card-one__social">
                                        <ul className="team-card-one__social__links">
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                        <div className="team-card-one__social__icon">
                                            <i className="fa fa-share-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-card-one__content">
                                    <h3 className="team-card-one__title"><Link to="#">Sarah Albert</Link></h3>
                                    <p className="team-card-one__designation">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="black-bg cta-two">
                <Parallax bgImage={BG1} bgImageAlt="" className="cta-two__bg section-padding-lg--top section-padding-lg--bottom" strength={300}>
                    <div className="container">
                        <div className="cta-two__inner">
                            <h3 className="cta-two__title">Nous offrons des consultations gratuites sur votre projet 
                        ou vos <span>idées</span>. Faites la demande maintenant...</h3>
                            <Link to="/contact" className="btn btn-lg btn-light"><span>FAIRE UNE DEMANDE</span></Link>
                        </div>
                    </div>
                </Parallax>
            </section>
            <section
                className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
                style={{ backgroundImage: `url(${BG2})` }}>
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-5">
                            <div className="testimonials-two__content">
                                <div className="section-title ">
                                    <p className="section-title__text">Nos clients</p>
                                    <h2 className="section-title__title">Quelques avis de nos clients récents
                                    </h2>
                                </div>
                                <div className="testimonials-two__content__text">
                                Nous n'essayons pas de vous prouver que nous sommes les meilleurs, nous vous demandons de confier vos projets à des professionnels comme nous, qui connaissent ce qu’ils
font et qui surtout peut vous permettre de passer à un niveau remarquable dans votre entreprise.
                                </div>
                                <div className="testimonials-two__content__text">Rejoignez nos entreprises clientes et partenaire pour œuvrer pour l’éclosion numérique de
l’Afrique à travers votre croissance.</div>
                                <Link to="/contact" className="thm-btn testimonials-two__content__btn"><span>Prendre un rendez-vous
                                    </span></Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonials-two__items">
                                <div className="row gutter-y-30">
                                    <div className="col-lg-12">
                                        <div className="testimonials-one-card">
                                            <div className="testimonials-one-card__image">
                                                <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                                            </div>
                                            <div className="testimonials-one-card__content">
                                                <div className="testimonials-one-card__text">On the other hand denounc with
                                                    ghteo
                                                    indignation and dislike men who so beguiled and demoralized the charms
                                                    of
                                                    pleasure
                                                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                                                <h3 className="testimonials-one-card__title">Michal Rahul</h3>
                                                <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                                                <i className="icon-right-quote testimonials-one-card__icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="testimonials-one-card">
                                            <div className="testimonials-one-card__image">
                                                <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                                            </div>
                                            <div className="testimonials-one-card__content">
                                                <div className="testimonials-one-card__text">On the other hand denounc with
                                                    ghteo
                                                    indignation and dislike men who so beguiled and demoralized the charms
                                                    of
                                                    pleasure
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
            <div className="client-carousel client-carousel--two">
                <div className="container">
                    <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                        <div className="item">
                            <img src={ClientImg} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default About