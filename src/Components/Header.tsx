import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="container_main">
                <div className="container_header">
                    <span className="logo_urfu"></span>
                    <div className="container_circle">
                        <div className="language">
                            <text className="language_text">Eng</text>
                        </div>
                        <div className="circle">
                            <span className="search_icon"></span>
                        </div>
                        <div className="circle">
                            <span className="four_circles"></span>
                        </div>
                        <div className="circle">
                            <text className="name_of_user_text letter_block">К</text>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;