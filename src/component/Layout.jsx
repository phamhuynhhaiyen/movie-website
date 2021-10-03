import React, { useContext, useRef } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Routes from '../routes/Routes'
import Footer from './Footer'
import { NewContext } from '../data/AppProvider'

const Layout = () => {
    const { isLoading } = useContext(NewContext)
    const scrollTop = useRef(null)
    window.onscroll = () => {
        if(window.scrollY > 80){
            scrollTop.current.classList.add('active')
        }else{
            scrollTop.current.classList.remove('active')
        }
     }
    const scrolltoTop = () =>{
        window.scrollTo(0,0);
    }
    
    
    if (isLoading) {
        return <div className="loader"><div className="lds-facebook"><div></div><div></div><div></div></div></div>
    }
    
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header />
                    <div className="main">
                        <Routes />
                    </div>
                    <div className="scroll-to-top" ref={scrollTop} onClick={scrolltoTop}><i className="fas fa-chevron-up"></i></div>
                    <Footer />
                </>

            )}
            />
        </BrowserRouter>
    )
}

export default Layout
