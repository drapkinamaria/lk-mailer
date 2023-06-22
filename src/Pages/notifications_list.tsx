import React from 'react';
import Header from '../Components/Header';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../StyleSheets/table.css';
import "../StyleSheets/styles.css";
import "../StyleSheets/colors.css";
import left from "../Svg/left.svg"
import right from "../Svg/right.svg"

export default function NotificationsList() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Рассылка уведомлений</div>
                    </div>
                    <div className="name_notification blue">Рассылка уведомлений</div>
                </div>
                <div className="block_main_part_table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="first_last_column"></th>
                                <th>Название уведомления</th>
                                <th>Кому</th>
                                <th>Дата создания уведомления</th>
                                <th>Автор</th>
                                <th>Состояние</th>
                                <th>Доставка</th>
                                <th>Дата последней доставки</th>
                                <th className="first_last_column"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td className="blue">Тестовое название</td>
                                <td>Студентам</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td>Филатов Сергей Владимирович</td>
                                <td>Опубликовано</td>
                                <td>Состояние:
                                    <div className="status orange-background orange">отправляется</div>
                                    респондентов: 120,<br />доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td className="first_last_column"></td>
                            </tr>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td className="blue">Приглашение на участие в турнире по мини-гольфу</td>
                                <td>Работникам</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td>Дружинина Надежда Геннадьевна</td>
                                <td>Новое</td>
                                <td>Состояние:
                                    <div className="status green-background green">доставлено</div>
                                    респондентов: 120,<br />
                                    доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023, <br /> 12:23:45</td>
                                <td className="first_last_column"></td>
                            </tr>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td className="blue">Приглашение на участие в турнире по мини-гольфу</td>
                                <td>Работникам</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td>Дружинина Надежда Геннадьевна</td>
                                <td>Новое</td>
                                <td>Состояние:
                                    <div className="status light-blue-background blue">новое</div>
                                    респондентов: 120,<br />
                                    доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023, <br /> 12:23:45</td>
                                <td className="first_last_column"></td>
                            </tr>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td className="blue">Приглашение на участие в турнире по мини-гольфу</td>
                                <td>Работникам</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td>Дружинина Надежда Геннадьевна</td>
                                <td>Новое</td>
                                <td>Состояние:
                                    <div className="status gray-background">ожидается отправка</div>
                                    респондентов: 120,<br />
                                    доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023, <br /> 12:23:45</td>
                                <td className="first_last_column"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <p className="pagination_text">Записи с 1 по 20 из 23456</p>
                    <div className="flex flex-row gap-2 justify-center">
                        <div className="pagination_text">Выводить по</div>
                        <div className="flex flex-row gap-5">
                            <button className="button_pagination blue">20</button>
                            <button className="button_pagination">40</button>
                            <button className="button_pagination">60</button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-5">
                        <button>
                            <img src={left}></img>
                        </button>
                        <button className="button_pagination_blue">1</button>
                        <button className="button_pagination">2</button>
                        <button className="button_pagination">3</button>
                        <button className="button_pagination">4</button>
                        <button className="button_pagination">5</button>
                        <div>...</div>
                        <button className="button_pagination">813</button>
                        <button>
                            <img src={right}></img>
                        </button>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    )
}