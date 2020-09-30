import React from 'react'

import logo from "../assets/img/logo.png"
import login from "../assets/img/login.png"

function Header(props) {
    return (
        <>
            <header>
                <div className="container">
                    <div className="wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" width="55px"/>
                            <span className="title"><a href="">Видеоконференции ИМИТ ИГУ</a></span> 
                        </div>

                        <div className="auth">
                            <span className="title"> 
                                <a href="">Выйти</a>
                            </span> 
                            <img src={login} alt="login" />
                        
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}




export default Header
