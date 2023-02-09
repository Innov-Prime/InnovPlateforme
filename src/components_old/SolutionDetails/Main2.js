import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import Breadcumb from '../Breadcumb/Main'

const SolutionDetails = () => {
	const options = {
		loop: true,
		autoplay: true,
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
			<Breadcumb Title="Solution Details 2" Breadcumb="SOLUTIONS" />

			<section className="section-padding--top section-padding--bottom about-two">

				<div className="container">
					<div className="row gutter-y-60">
						<div className="col-lg-6">
							<div className="about-two__content">
								<div className="section-title ">
									<p className="section-title__text">HOW CAN HELP YOU</p>
									<h2 className="section-title__title">Business Solutions to
										Growth Business</h2>
								</div>
								<div className="about-two__text">System is a term used to refer to an organized collection
									symbols and processes that may be used to operate on such symbols. Perspiciatis unde
									omnis natus error voluptatems accusa.</div>
								<ul className="about-two__list">
									<li>
										Going Above and
										Beyond
									</li>
									<li>
										Committed to
										People First
									</li>
								</ul>
								<Link to="/about" className="thm-btn about-two__btn"><span>Learn More</span></Link>

							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-two__image">
								<img src="assets/images/resources/about-two-1-1.jpg" alt="" className="wow fadeInUp"
									data-wow-duration="1500ms" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="project-details section-padding--bottom">
				<div className="container">
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

			<section className="cta-one about-four section-padding--top mb-5">
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

export default SolutionDetails