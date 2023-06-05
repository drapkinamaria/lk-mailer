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
                                <th>№</th>
                                <th>Название уведомления</th>
                                <th>Кому</th>
                                <th>Дата создания уведомления</th>
                                <th>Автор</th>
                                <th>Состояние</th>
                                <th>Доставка</th>
                                <th>Дата последней доставки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Тестовое название</td>
                                <td>Студентам</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                                <td>Филатов Сергей Владимирович</td>
                                <td>Опубликовано</td>
                                <td>Состояние:
                                    <div className="status orange-background orange">отправляется</div>
                                    респондентов: 120,<br />доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023,<br /> 11:33:23</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Приглашение на участие в турнире по мини-гольфу</td>
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
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Приглашение на участие в турнире по мини-гольфу</td>
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
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Приглашение на участие в турнире по мини-гольфу</td>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <p>Записи с 1 по 20 из 23456</p>
                    <div className="flex flex-row gap-2 justify-center">
                        <div>Выводить по</div>
                        <div className="flex flex-row gap-4">
                            <button className="blue">20</button>
                            <button>40</button>
                            <button>60</button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button>
                            <img src={left}></img>
                        </button>
                        <button className="choose_amount blue-background white">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <div>...</div>
                        <button>813</button>
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