import React from 'react'
import { Link } from 'react-router-dom'
import BgImg from  "../../assets/images/background/page-header-bg-1-1.jpg"

const Breadcumb = ({ Title, Breadcumb }) => {
    return (
        <div className="page-header" style={{paddingBottom:'50px'}}>
            <div className="page-header__bg"
                style={{ backgroundImage: `url(${BgImg})` }}></div>
            <div className="container">
                <ul className="thm-breadcrumb list-unstyled" style={{marginTop:'50px'}}>
                    <li><Link to="/">Acceuil</Link></li>
                    <li>{Breadcumb && Breadcumb}</li>
                </ul>
                <h2 className="page-header__title">{Title && Title}</h2>
            </div>
        </div>
    )
}

export default Breadcumb