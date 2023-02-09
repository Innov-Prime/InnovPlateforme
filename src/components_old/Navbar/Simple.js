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

        } else if (path === "/solutions" || path === "/solution-details") {
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
            <div className="header-two bg-dark mt-0" style={{width:'100%'}}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <nav className={`main-menu sticky-header fixed-top  sticky-fixed`}>
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
                                                <Link to="/solutions">Solution</Link>
                                                {/* <ul style={{display:"block"}}>
                                                <li><Link to="/solution-details">Détails solution</Link></li>
                                                <li><Link to="/solution-details">Détails solution</Link></li>
                                            </ul> */}
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/projects">Réalisations</Link>
                                                {/* <ul style={{display:"block"}}>
                                                <li><Link to="/project-details">Détails réalisation </Link></li>
                                                <li><Link to="/project-details">Project</Link></li>
                                            </ul> */}
                                            </li>

                                            <li className="menu-item-has-children">
                                                <Link to="/service">Services</Link>
                                                <ul style={{ display: "block" }}>
                                                    <li><Link to="/service-01">Services 01</Link></li>
                                                    <li><Link to="/service-02">Services 02</Link></li>
                                                    <li><Link to="/cyber-security">Cyber Security</Link></li>
                                                    <li><Link to="/it-management">IT Management</Link></li>
                                                    <li><Link to="/qa-testing">QA & Testing</Link></li>
                                                    <li><Link to="/infrastructure-plan">Infrastructure Plan</Link></li>
                                                    <li><Link to="/it-consultent">IT Consultent</Link></li>
                                                </ul>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <Link to="/about">A propos</Link>
                                                {/* <ul>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blog-details">Blog Details</Link></li>
                                            </ul> */}
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
                                            {/* <Link to="#" className="search-toggler">
                                            <i className="icon-magnifying-glass"></i>
                                        </Link> */}
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar