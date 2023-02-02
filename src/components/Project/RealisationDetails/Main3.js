import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import Breadcumb from '../../Breadcumb/Main'

import PRG1 from '../../../assets/project-2-1.jpg'
import PRG2 from '../../../assets/project-2-2.jpg'
import PRG3 from '../../../assets/project-2-4.jpg'
import PRG4 from '../../../assets/project-2-1.jpg'

const RealisationDetails = () => {
	const options = {
		loop: false,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		items: 1,
		margin: 0,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			576: {
				items: 2,
				margin: 30
			},
			992: {
				items: 3,
				margin: 30
			}
		}
	}
	return (
		<>
			<Breadcumb Title="Realisation Details 3" Breadcumb="REALISATION" />
			<section className="project-details section-padding--bottom section-padding--top">
				<div className="container">
					<div className="project-details__image">
						<img src="assets/images/projects/project-d-1-1.jpg" alt="" />
					</div>
					<div className="project-details__info">
						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Clients:</h4>
							<p className="project-details__info__text">David Jackson</p>
						</div>

						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Category:</h4>
							<p className="project-details__info__text"><Link to="#">IT</Link>, <Link to="#">Technology</Link></p>

						</div>
						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Date:</h4>
							<p className="project-details__info__text">28 July, 2022</p>
						</div>
						<div className="project-details__info__item">
							<h4 className="project-details__info__title">Value:</h4>
							<p className="project-details__info__text">87,000 USD</p>
						</div>
						<div className="project-details__info__item">
							<div className="project-details__info__social">
								<Link to="#"><i className="fab fa-twitter"></i></Link>
								<Link to="#"><i className="fab fa-facebook"></i></Link>
								<Link to="#"><i className="fab fa-instagram"></i></Link>
							</div>
						</div>
					</div>
					<h3 className="project-details__title">Data Recovery Analysis</h3>
					<div className="project-details__content">
						<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
							quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
							port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry
							standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum
							is simply dummy text of the new design printng and type setting Ipsum Take a look at our round
							up of the best shows coming soon to your telly box has been the is industrys. When an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic typesetting, remaining essentially
							unchanged. </p>
						<p>Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has survived not
							only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting
							Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the
							is industrys.</p>
						<ul className="project-details__list">
							<li>
								<i className="fa fa-check-circle"></i>
								Lorem Ipsum generators on the Internet tend uses a dictionary.
							</li>
							<li>
								<i className="fa fa-check-circle"></i>
								The majority have alteration in some form of over 200 Latin words.
							</li>
							<li>
								<i className="fa fa-check-circle"></i>
								There are many variations of passages of available slightly.
							</li>
						</ul>
					</div>
				</div>
			</section>


			<section className="section-padding--top section-padding--bottom">
				<div className="container">
					<div className="section-title text-center">
						<p className="section-title__text">similar realisations</p>
						<h2 className="section-title__title">Check We Have Similar <br />
							IT Projects</h2>
					</div>

					<OwlCarousel className="thm-owl__carousel" {...options}>
						<div className="item">
							<div className="project-card-one">
								<div className="project-card-one__image">
									<img src={PRG3} alt="" />
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
						<div className="item">
							<div className="project-card-one">
								<div className="project-card-one__image">
									<img src={PRG1} alt="" />
								</div>
								<div className="project-card-one__content">
									<div className="project-card-one__content__inner">
										<p className="project-card-one__text">IT Technology Solution</p>
										<h3 className="project-card-one__title"><Link to="//realisation-details2">Data Recovery
											Analysis</Link></h3>
										<Link to="/realisation-details2" className="project-card-one__more">
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
										<h3 className="project-card-one__title"><Link to="/realisation-details3">Data Recovery
											Analysis</Link></h3>
										<Link to="/realisation-details3" className="project-card-one__more">
											<i className="fa fa-angle-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						
					</OwlCarousel>
				</div>
			</section>

			<section className="cta-one about-four mb-5">
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
		</>
	)
}

export default RealisationDetails