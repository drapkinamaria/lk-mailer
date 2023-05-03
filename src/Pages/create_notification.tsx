import React from 'react';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"



function CreateNotification() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <text className="main_path_text main_first_color">Главная /</text>
                        <text className="main_path_text main_second_color"> Корпоративные сервисы /
                            Создать уведомление</text>
                    </div>
                    <div className="name_notification_block">
                        <h2 className="name_mailing">Тестовое уведомление сотрудникам</h2>
                    </div>
                    <div className ="big_mailer_container">
                        <div className="mailing_container">
                            <text className="created_text">Автор: </text>
                            <text className="created_text">Филонов Сергей Владимирович</text>
                        </div>
                        <div className="mailing_container">
                            <text className="created_text">Создано: </text>
                            <text className="created_text">03.03.2023 13:23:45</text>
                        </div>
                    </div>
                    <div className="button_container">
                        <button className="button blue">
                            <text className="button_text">Опубликовать</text>
                        </button>
                        <button className="button red">
                            <text className="button_text">Удалить</text>
                        </button>
                    </div>
                </div>
                <div className="block_main_part">
                    <div className="delivery_type">
                        <div className="blue_header_container">
                            <text className="blue_header">Тип доставки</text>
                        </div>
                        <div className="checkbox_container">
                            <input type="checkbox" value="телеграм"/><label>телеграм</label>
                            <input type="checkbox" value="почта"/><label>почта</label>
                            <input type="checkbox" value="оповещение"/><label>оповещение в ЛК</label>
                        </div>
                    </div>
                    <div className="whom">
                        <div className="blue_header_container">
                            <text className="blue_header">Кому</text>
                        </div>
                        <div className="container">
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Категория получателей</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Сотрудники</option>
                                    <option className="choice_text">Студенты</option>
                                </select>
                            </div>
                        </div>
                        <div className="container">
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Вид трудоустройства</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Категория</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Подразделение</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Должность</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Ученая степень</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Ученое звание</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Пол</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="choice_block">
                                <div className="black_text_header_container">
                                    <text className="black_small_header">Год рождения</text>
                                </div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="content_container">
                        <div className="blue_header_container">
                            <text className="blue_header">Контент</text>
                        </div>
                        <div className="content_header">
                            <div className="square-container">
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="picture_settings arrow_back"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="picture_settings arrow_forward"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="picture_settings bold"></span>
                                    </button>
                                    <button className="without_borders_square">
                                        <span className="picture_settings italic"></span>
                                    </button>
                                    <button className="ordinary_square">
                                        <span className="picture_settings underline"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="new_picture_settings rubber"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="new_picture_settings left hamburger"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="picture_settings numbered_list"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="left_square">
                                        <span className="picture_settings link"></span>
                                    </button>
                                    <button className="right_square">
                                        <span className="second_picture_settings picture"></span>
                                    </button>
                                </div>
                                <div className="square-block">
                                    <button className="square">
                                        <span className="second_picture_settings code"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="content_bottom"></div>
                    </div>
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
    );
}

export default CreateNotification;
