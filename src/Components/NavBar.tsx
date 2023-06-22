import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../StyleSheets/navigation.css' ;
import gray_doc from "../Svg/gray_doc.svg"
import gray_documents from "../Svg/gray_documents.svg"
import gray_lk_role from '../Svg/gray_lk-role.svg'
import gray_information from "../Svg/gray_information.svg"
import gray_role from "../Svg/gray_role.svg"
import "../StyleSheets/styles.css"


export default function NavBar() {
    const location = useLocation();

    const isActivePage = (pathname: string) => {
        return location.pathname === pathname;
    };

    return (
        <nav className="navigation">
            <div className="header_text -ml-1 blue">
                Рассылка уведомлений
            </div>
            <div className="flex flex-col flex-wrap gap-3">
                <Link to="/notifications-list" className="flex -ml-2.5 no-underline line">
                    <img src={gray_doc}
                         className={`navigation_text ${isActivePage('/notifications-list') ? 'picture_svg' : ''}`}
                         alt="Document" />
                    <div className={`navigation_text ${isActivePage('/notifications-list') ? 'blue' : 'gray'}`}>
                        Уведомления
                    </div>
                </Link>
                <Link to="/create-notification" className="flex -ml-2.5 no-underline line">
                    <img src={gray_role}
                         className={`navigation_text ${isActivePage('/create-notification') ? 'picture_svg' : ''}`}
                         alt="Role" />
                    <div className={`navigation_text ${isActivePage('/create-notification') ? 'blue' : 'gray'}`}>
                        Создать уведомление
                    </div>
                </Link>
                <Link to="/statistics" className="flex -ml-2.5 no-underline line">
                    <img src={gray_documents}
                         className={`navigation_text ${isActivePage('/statistics') ? 'picture_svg' : ''}`}
                         alt="Documents" />
                    <div className={`navigation_text ${isActivePage('/statistics') ? 'blue' : 'gray'}`}>
                        Статистика
                    </div>
                </Link>
                <Link to="/subscription-management" className="flex -ml-2.5 no-underline line">
                    <img src={gray_lk_role}
                         className={`navigation_text ${isActivePage('/subscription-management') ? 'picture_svg' : ''}`}
                         alt="LK Role" />
                    <div className={`navigation_text ${isActivePage('/subscription-management') ? 'blue' : 'gray'}`}>
                        Управление подписками
                    </div>
                </Link>
                <Link to="/information" className="flex -ml-2.5 no-underline line">
                    <img src={gray_information}
                         className={`navigation_text ${isActivePage('/information') ? 'picture_svg' : ''}`}
                         alt="Information" />
                    <div className={`navigation_text ${isActivePage('/information') ? 'blue' : 'gray'}`}>
                        Информация
                    </div>
                </Link>
            </div>
        </nav>
    );
}
