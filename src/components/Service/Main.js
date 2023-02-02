import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../Breadcumb/Main'
import BG from '../../assets/images/background/cta-two-bg-1-1.jpg'

import Logo from '../../assets/logo.png'

const Service = () => {

	return (
		<>
			<Breadcumb Title="Nos services" Breadcumb="SERVICES" />

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
								<img src="../../assets/images/resources/about-two-1-1.jpg" alt="" className="wow fadeInUp"
									data-wow-duration="1500ms" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two mt-5">
				<div className="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
					style={{ backgroundImage: `url(${BG})` }}></div>
				<div className="container">
					<div className="cta-two__inner">
						<h3 className="cta-two__title">Better IT Solutions And Services
							At Your <span>Fingertips</span></h3>
						<Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
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
		</>)
}

export default Service