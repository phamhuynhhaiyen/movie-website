import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <span>Melon.</span>
            </div>
            <div className="footer__copyright">
                <span>All rights reserved © {new Date().getFullYear()} </span>
            </div>
            <div className="footer__icon">
                <Link to="/">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/">
                    <i className="fab fa-facebook"></i>
                </Link>
                <Link to="/">
                    <i className="fab fa-youtube"></i>
                </Link>
                <Link to="/">
                    <i className="fab fa-twitter"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer
