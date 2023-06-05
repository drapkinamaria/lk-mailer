import React from 'react';
import '../StyleSheets/header.css';
import '../StyleSheets/colors.css'
import "../StyleSheets/styles.css"
import four_circles from "../Svg/four_circles.svg"
import search_icon from "../Svg/search_icon.svg"
import logo_urfu from "../Svg/logo_urfu.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="container_header">
                <img src={logo_urfu} className="logo_urfu"></img>
                <div className="container_circle">
                    <div className="language">
                        <div className="language_text blue">Eng</div>
                    </div>
                    <div className="circle">
                        <img src={search_icon}></img>
                    </div>
                    <div className="circle">
                        <img src={four_circles} className="search_icon"></img>
                    </div>
                    <div className="circle">
                        <div className="name_of_user_text letter_block blue">К</div>
                    </div>
                </div>
            </div>
        </header>
    )
}