import React, { useRef, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
const menuNav = [
    {
        dislay: "Trang chủ",
        path: "/"
    },
    {
        dislay: "Phim bộ",
        path: "/phimbo"
    },
    {
        dislay: "Phim lẻ",
        path: "/phimle"
    },
    {
        dislay: "Phim hoạt hình",
        path: "/phimhoathinh"
    },
    {
        dislay: "Phim chiếu rạp",
        path: "/phimchieurap"
    }
]



const Header = () => {
    const {pathname} = useLocation()
    const activeNav = menuNav.findIndex(e => e.path === pathname)
    const menuRef = useRef(null)
    const menuToggle = () => menuRef.current.classList.toggle('active')
    const [ten, setTen] = useState("")

    const Search = (e) => {
        if (e.key === 'Enter') {
            window.location = `/timkiem/${e.target.value}`
        }
    }
    const SearchClick = () => {
        if (ten != "") {
            window.location = `/timkiem/${ten}`
        }
    }
    return (
        <div className="header">
            <div className="header__logo">
                <span>Melon.</span>
            </div>
            <div className="header__menu" ref={menuRef}>
                <div className="header__menu__close" onClick={menuToggle}> 
                    <i className="fas fa-times"></i>
                </div>
                {
                    menuNav.map((item, index) => (
                            <Link to={item.path} className={`header__menu__item ${index === activeNav ? 'active' : ''}`} key={index} onClick={menuToggle}>
                                {item.dislay}
                            </Link>
                        
                    ))
                }
            </div>
            <div className="header__tool">
                
                {/* <i className="fa fa-search"></i> */}
                <div className="header__tool__search">
                    <input type="text" required onKeyPress={Search} onChange={(e)=>setTen(e.target.value)}/>
                    <i className="fa fa-search" onClick={SearchClick}></i>
                </div>
                <i className="fas fa-bars" onClick={menuToggle}></i>

            </div>
        </div>
    )
}

export default Header
