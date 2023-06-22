import React from 'react';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../StyleSheets/styles.css"


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
                <div className="block_main_part_table flex gap-y-1">
                    <div className="px-6 flex flex-col gap-y-3">
                        <div className="blue_header">Параметры отписки</div>
                        <div>Для отписки, пожалуйста укажите категорию получателя и канал доставки, по которым вы не
                            желаете получать уведомления.</div>
                        <div className="flex flex-row gap-x-7 gap-y-3 flex-wrap">
                            <div className="two_elements">
                                <div className="black_small_header">Категория получателя</div>
                                <select className="choice">
                                    <option>Студенты</option>
                                    <option>Преподаватели</option>
                                </select>
                            </div>
                            <div className="two_elements">
                                <div className="black_small_header">Канал доставки</div>
                                <select className="choice choice_text">
                                    <option>Личный кабинет</option>
                                    <option>Телеграм</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex mt-1">
                            <button className="blue_button button_text">Добавить отписку</button>
                        </div>
                        <div>Обратите внимание, что отписка отключает отправку только необязательных рассылок. Вам будут
                            отправляться только обязательные уведомления о важных событиях
                        </div>
                        <div className="blue_header">Список отписок</div>
                        <div>
                            (чтобы убрать ненужную отписку и подписаться повторно, нажмите на кнопку &nbsp;
                            <button className="small-close-button">X</button>
                            )
                        </div>
                    </div>
                    <table className="table mt-3.5">
                        <thead>
                            <tr>
                                <th className="first_last_column top_th"></th>
                                <th className="top_th">Категория получателя</th>
                                <th className="top_th">Канал доставки</th>
                                <th className="top_th">Отписка</th>
                                <th className="first_last_column top_th"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td>Обучающимся</td>
                                <td>Email</td>
                                <td>
                                    <button className="close-button">X</button>
                                </td>
                                <td className="first_last_column"></td>
                            </tr>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td>Работникам</td>
                                <td>Личный кабинет</td>
                                <td>
                                    <button className="close-button">X</button>
                                </td>
                                <td className="first_last_column"></td>
                            </tr>
                            <tr className="row">
                                <td className="first_last_column"></td>
                                <td>Работникам</td>
                                <td>Телеграм</td>
                                <td>
                                    <button className="close-button">X</button>
                                </td>
                                <td className="first_last_column"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </main>
        </div>
    )
}
