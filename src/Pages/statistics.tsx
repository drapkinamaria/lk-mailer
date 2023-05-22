import React from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";
import '../StyleSheets/mailing_elements.css'
import Footer from "../Components/Footer";

export default function Statistics() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Статистика</div>
                    </div>
                    <div className="name_notification blue">Статистика</div>
                </div>
                <div className="block_main_part">
                    <div>
                        <div className="blue_header">Общие фильтры</div>
                        <div className="black_small_header">Тема уведомления</div>
                        <div className="search_block">
                            <div className="big_search_icon"></div>
                            <input className="search choice_text"></input>
                        </div>
                        <div className="black_small_header">Количество адресатов</div>
                        <div className="gap flex_property">
                            <div className="block">
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block">
                                <div className="search_block">
                                    <div className="big_search_icon"></div>
                                    <input className="search choice_text"></input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="black_small_header">Автор</div>
                            <div className="search_block">
                                <div className="big_search_icon"></div>
                                <input className="search choice_text"></input>
                            </div>
                        </div>
                        <div className="black_small_header">Период отправки</div>
                    </div>
                    <div>
                        <div className="blue_header">Фильтры по целевой аудитории</div>
                        <div className="black_small_header">Категории получателей</div>
                        <div>
                            <select className="choice choice_text">
                                <option className="choice_text">Привет</option>
                                <option className="choice_text">Привет</option>
                            </select>
                        </div>
                        <div className="black_small_header">Адресат</div>
                        <div className="search_block">
                            <div className="big_search_icon"></div>
                            <input className="search choice_text"></input>
                        </div>
                        <div className="flex_property gap">
                            <div className="block_four_elements">
                                <div className="black_small_header">Вид трудоустройства</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Категория</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Подразделение</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Должность</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Ученая степень</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Ученое звание</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Пол</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="block_four_elements">
                                <div className="black_small_header">Год рождения</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                        </div>
                        <button className="button blue-background button_text">Применить фильтры</button>
                    </div>
                    <div>
                        <div className="blue_header">Примененные фильтры</div>
                        <div className="gap flex_property">
                            <div className="amount_of_people">Число отправленных сообщений - 1000</div>
                            <div className="amount_of_people">Число доставленных сообщений - 1000</div>
                        </div>
                        <div className="gap flex_property">
                            <div className="amount_of_people">Число прочитанных сообщений - 1000</div>
                            <div className="amount_of_people">Число недоставленных сообщений - 1000</div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer/>
        </div>
    )
}
