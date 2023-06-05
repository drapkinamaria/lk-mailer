import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/navigation.css' ;
import doc from '../Svg/doc.svg'
import documents from '../Svg/documents.svg'
import lk_role from '../Svg/lk-role.svg'
import information from '../Svg/information.svg'
import role from '../Svg/role.svg'
import "../StyleSheets/styles.css"

export default function NavBar() {
    return (
        <nav className="navigation">
            <div className="header_text blue">
                Рассылка
                уведомлений
            </div>
            <div className="flex flex-col flex-wrap gap-3">
                <Link to='/notifications-list' className="flex items-center no-underline">
                    <img src={doc}></img>
                    <div className="navigation_text gray">Уведомления</div>
                </Link>
                <Link to='/create-notification' className="flex items-center no-underline">
                    <img src={role}></img>
                    <div className="navigation_text gray">Создать уведомление</div>
                </Link>
                <Link to='/statistics' className="flex items-center no-underline">
                    <img src={documents}></img>
                    <div className="navigation_text gray">Статистика</div>
                </Link>
                <Link to='/subscription-management' className="flex items-center no-underline">
                    <img src={lk_role}></img>
                    <div className="navigation_text gray">Управление подписками</div>
                </Link>
                <Link to='/information' className="flex items-center no-underline">
                    <img src={information}></img>
                    <div className="navigation_text gray">Информация</div>
                </Link>
            </div>
        </nav>
    )
}