import React from 'react'

function NavBar() {
    return (
        <nav className="navigation">
            <p className="header_text">
                Рассылка
                уведомлений
            </p>
            <a href='/notifications-list' className="text_image_block">
                <span className="doc"></span>
                <text className="navigation_text">Уведомления</text>
            </a>
            <a href='/create-notification' className="text_image_block">
                <span className="role"></span>
                <text className="navigation_text">Создать уведомление</text>
            </a>
            <a className="text_image_block">
                <span className="documents"></span>
                <text className="navigation_text">Статистика</text>
            </a>
            <a className="text_image_block">
                <span className="lk_role"></span>
                <text className="navigation_text">Управление подписками</text>
            </a>
            <a className="text_image_block">
                <span className="information"></span>
                <text className="navigation_text">Информация</text>
            </a>
        </nav>
    )
}

export default NavBar;