import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import WOW from 'wowjs'

const Navbar = () => {
    const location = useLocation()
    const path = location.pathname
    const [sticky, setSticky] = useState(false)
    const [search, setSearch] = useState(false)
    const [mobile, setmobile] = useState(false)

    const [menu, setmenu] = useState({})
    const [home, setHome] = useState(false)
    const [header, setheader] = useState(false)
    const [pages, setpages] = useState(false)
    const [services, setservice] = useState(false)
    const [project, setproject] = useState(false)
    const [blog, setblog] = useState(false)

    const activeMenu = () => {
        if (path === "/" || path === "/home-02" || path === "/home-03") {
            setmenu({ home: true })

        } else if(path === "/solutions" || path === "/solution-details") {
			setmenu({ solutions: true })
		}
		
		else if (path === "/about" || path === "/team") {
            setmenu({ pages: true })
        } else if (path === "/service" || path === "/service-01" || path === "/service-02" || path === "qa-testing" || path === "/it-management" || path === "cyber-security" || path === "/it-consultant" || path === "/infrastructure-plan") {
            setservice({ services: true })
        } else if (path === "/projects" || path === "/project-details") {
            setmenu({ project: true })
        } else if (path === "/blog" || path === "/blog-details") {
            setmenu({ blog: true })
        } else if (path === "/contact") {
            setmenu({ contact: true })
        } else {
            setmenu({ home: true })
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(() => {
        window.scroll(0, 0)
        new WOW.WOW({
            live: false
        }).init();
        activeMenu()
    }, [path])

    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 141 ? setSticky(true) : setSticky(false);
    }
    return (
        <>
            <div className="header-two">
				<div className="topbar-two">
					<div className="container">
						<div className="topbar-two__inner">
							<div className="topbar-two__logo">
								<Link to="/">
									<img src={Logo} width="98" height="33" alt="Cretech" />
								</Link>
							</div>
							<ul className="topbar-two__list">
								<li className="topbar-two__list__item">
									<div className="topbar-two__list__icon">
										<i className="fa fa-envelope"></i>
									</div>
									<div className="topbar-two__list__content">
										<span>Adresse mail</span>
										<Link to="mailto:needhelp@company.com">contact@innov-prime.com</Link>
									</div>
								</li>
								<li className="topbar-two__list__item">
									<div className="topbar-two__list__icon">
										<i className="fa fa-map-marker"></i>
									</div>
									<div className="topbar-two__list__content">
										<span>Address</span>
										Benin , Cotonou
									</div>
								</li>
							</ul>
							<div className="topbar-two__btns">
								<Link to="/contact" className="thm-btn topbar-two__btn"><span>Prendre un rendez-vous</span></Link>
							</div>
						</div>
					</div>
				</div>
				<nav className={`main-menu sticky-header ${sticky && "sticky-header--cloned sticky-fixed"}`}>
					<div className="container">
						<div className="main-menu__inner">
							<div className="main-menu__logo">
								<Link to="/">
									<img src={Logo} width="98" height="33" alt="Cretech" />
								</Link>
							</div>

							<ul className="main-menu__list">
								<li className="menu-item-has-children current">
									<Link to="/">Accueil</Link>
								</li>
                    
								<li className="menu-item-has-children">
									<Link to="/solutions">Solutions</Link>
								</li>
                                <li className="menu-item-has-children">
									<Link to="/realisations">Réalisations</Link>
								</li>

								<li className="menu-item-has-children">
									<Link to="/service">Services</Link>
									<ul style={{display:"block"}}>
										<li><Link to="/service-01">Services 01</Link></li>
										<li><Link to="/service-02">Services 02</Link></li>
										<li><Link to="/service-03">Services 03</Link></li>
									</ul>
								</li>
								
								<li className="menu-item-has-children">
									<Link to="/about">A propos</Link>
								</li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>

							<div className="main-menu__right">
								<Link to="#" className="mobile-nav__toggler">
									<span></span>
									<span></span>
									<span></span>
								</Link>
								<Link to="tel:+229 98981541" className="main-menu__cta">
									<i className="fa fa-phone-alt"></i>
									<span className="main-menu__cta__text">
										<b>+22998981541</b>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
        </>
    )
}

export default Navbar