import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'

import BG1 from '../../../assets/project-2-1.jpg'
import BG2 from '../../../assets/project-2-2.jpg'
import BG3 from '../../../assets/project-2-4.jpg'
import BG4 from '../../../assets/project-2-1.jpg'

const Projects = () => {
  return (
    <>
    <Breadcumb Title="Réalisations" Breadcumb="REALISATION" />
    <section className="section-padding--bottom section-padding--top">
			<div className="container">
				<div className="row gutter-y-30">
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
						data-wow-delay="000ms">
						<div className="project-card-one">
							<div className="project-card-one__image">
								<img src={BG1} alt=""/>
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
								<img src={BG2} alt=""/>
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
								<img src={BG3} alt=""/>
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
    </>
  )
}

export default Projects