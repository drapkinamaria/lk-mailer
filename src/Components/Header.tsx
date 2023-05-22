import React from 'react';
import '../StyleSheets/header.css';
import '../StyleSheets/colors.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container_header">
                <span className="logo_urfu"></span>
                <div className="container_circle">
                    <div className="language">
                        <div className="language_text blue">Eng</div>
                    </div>
                    <div className="circle">
                        <span className="search_icon"></span>
                    </div>
                    <div className="circle">
                        <span className="four_circles"></span>
                    </div>
                    <div className="circle">
                        <div className="name_of_user_text letter_block blue">К</div>
                    </div>
                </div>
            </div>
        </header>
    )
}