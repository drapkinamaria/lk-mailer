import React from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../StyleSheets/table.css'

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
                                <td>Состояние: респондентов: 120,<br />доставлено: 0,<br />
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
                                    респондентов: 120,<br />
                                    доставлено: 0,<br />
                                    не удалось доставить: 120</td>
                                <td>03 марта 2023, <br /> 12:23:45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer/>
        </div>
    )
}