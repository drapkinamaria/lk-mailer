import React from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";

function NotificationsList() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <text className="main_path_text main_first_color">Главная /</text>
                        <text className="main_path_text main_second_color"> Корпоративные сервисы /
                            Рассылка уведомлений
                        </text>
                    </div>
                    <div className="name_notification_block">
                        <h2 className="name_notification">Рассылка уведомлений</h2>
                    </div>
                    <div className="search_block">
                        <span className="big_search_icon"></span>
                        <input className="search" placeholder="Поиск"></input>
                    </div>
                </div>
                <div className="block_table">
                    <table>
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
                        <tr>
                            <td>1</td>
                            <td>Тестовое название</td>
                            <td>Студентам</td>
                            <td>03.03.2023,<br/> 11:33:23</td>
                            <td>Филатов Сергей Владимирович</td>
                            <td>Опубликовано</td>
                            <td>Состояние: респондентов: 120,<br/>доставлено: 0,<br/>
                                не удалось доставить: 120
                            </td>
                            <td>03.03.2023,<br/> 11:33:23</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Приглашение на участие в турнире по мини-гольфу</td>
                            <td>Работникам</td>
                            <td>03.03.2023,<br/> 11:33:23</td>
                            <td>Дружинина Надежда Геннадьевна</td>
                            <td>Новое</td>
                            <td>Состояние:
                                респондентов: 120,<br/>
                                доставлено: 0,<br/>
                                не удалось доставить: 120
                            </td>
                            <td>03.03.2023, <br/> 12:23:45</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>$200</td>
                            <td>$35</td>
                            <td>Andy</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>$175</td>
                            <td>$25</td>
                            <td>Annie</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>$175</td>
                            <td>$25</td>
                            <td>Annie</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>$175</td>
                            <td>$25</td>
                            <td>Annie</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>$175</td>
                            <td>$25</td>
                            <td>Annie</td>
                        </tr>
                    </table>
                </div>
            </main>
            <footer className="footer">
                <div className="footer_block">
                    <text className="main_path_text footer_text">
                        © ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина» 2020-2023
                    </text>
                </div>
            </footer>
        </div>
    )
}

export default NotificationsList;