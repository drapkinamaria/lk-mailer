import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/navigation.css';

export default function NavBar() {
    return (
        <nav className="navigation">
            <div className="header_text blue">
                Рассылка
                уведомлений
            </div>
            <div className="navigation_properties">
                <Link to='/notifications-list' className="text_image_block">
                    <span className="doc"></span>
                    <div className="navigation_text gray">Уведомления</div>
                </Link>
                <Link to='/create-notification' className="text_image_block">
                    <span className="role"></span>
                    <div className="navigation_text gray">Создать уведомление</div>
                </Link>
                <Link to='/statistics' className="text_image_block">
                    <span className="documents"></span>
                    <div className="navigation_text gray">Статистика</div>
                </Link>
                <Link to='/subscription-management' className="text_image_block">
                    <span className="lk_role"></span>
                    <div className="navigation_text gray">Управление подписками</div>
                </Link>
                <Link to='/information' className="text_image_block">
                    <span className="information"></span>
                    <div className="navigation_text gray">Информация</div>
                </Link>
            </div>
        </nav>
    )
}