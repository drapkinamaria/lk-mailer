import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import 'tailwindcss/tailwind.css'

export default function SubscriptionManagement() {
    return(
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Управление подписками</div>
                    </div>
                    <div className="name_notification blue">Управление подписками</div>
                </div>
                <div className="block_main_part_table">
                    <div className="blue_header">Параметры отписки</div>
                    <div>Для отписки, пожалуйста укажите категорию получателя и канал доставки, по которым вы не
                        желаете получать уведомления.</div>
                    <div className="flex_property gap">
                        <div className="block">
                            <div className="black_small_header">Категория получателя</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Студенты</option>
                                <option className="choice_text">Преподаватели</option>
                            </select>
                        </div>
                        <div className="block">
                            <div className="black_small_header">Канал доставки</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Личный кабинет</option>
                                <option className="choice_text">Телеграм</option>
                                <option className="choice_text">Email</option>
                            </select>
                        </div>
                    <div>
                        <button className="button blue-background button_text">Добавить отписку</button>
                    </div>
                    <div>Обратите внимание, что отписка отключает отправку только необязательных рассылок. Вам будут
                        отправляться только обязательные уведомления о важных событиях</div>
                    </div>
                    <div className="blue_header">Список отписок</div>
                    <div className="flex_property">
                        (чтобы убрать ненужную отписку и подписаться повторно, нажмите на кнопку &nbsp;
                        <button className="small-close-button red">X</button>
                        )
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Категория получателя</th>
                            <th>Канал доставки</th>
                            <th>Отписка</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Обучающимся</td>
                            <td>Email</td>
                            <td>
                                <button className="close-button red">X</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Работникам</td>
                            <td>Личный кабинет</td>
                            <td>
                                <button className="close-button red">X</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
