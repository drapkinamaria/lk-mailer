import React, {useState} from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";
import '../StyleSheets/mailing_elements.css'
import Footer from "../Components/Footer";
import "../StyleSheets/styles.css"
import left from "../Svg/left.svg";
import right from "../Svg/right.svg";

const ChooseRecepientCategoryStat: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Сотрудники');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex gap-y-1 flex-col flex-wrap">
            <div className="flex flex-col gap-y-2">
                <div className="black_small_header">Категория получателей</div>
                <select className="choice" value={selectedOption} onChange={handleOptionChange}>
                    <option>Сотрудники</option>
                    <option>Студенты</option>
                </select>
            </div>
            {selectedOption === 'Сотрудники' &&
                <div className="flex gap-x-7 gap-y-3 flex-wrap mt-3">
                    <div className="four_elements">
                        <div className="black_small_header">Вид трудоустройства</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Категория</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Подразделение</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Должность</div>
                        <select className="choice choice_text">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Ученая степень</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Ученое звание</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Пол</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Год рождения</div>
                        <select className="choice">
                            <option>Привет</option>
                            <option>Привет</option>
                        </select>
                    </div>
                </div>}
            {selectedOption === 'Студенты' &&
                <div className="flex flex-col gap-y-3 mt-3">
                    <div className="flex flex-row gap-x-7 flex-wrap gap-y-3">
                        <div className="two_elements">
                            <div className="black_small_header">Выбрать для</div>
                            <select className="choice">
                                <option>Привет</option>
                                <option>Привет</option>
                            </select>
                        </div>
                        <div className="two_elements">
                            <div className="black_small_header">Целевая аудитория(студенты)</div>
                            <select className="choice">
                                <option>Личный кабинет</option>
                                <option>Телеграм</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3.5">
                        <div className="black_bold_header">1. Информация об образовательной программе</div>
                        <div className="flex gap-x-7 gap-y-3 flex-wrap">
                            <div className="flex flex-col gap-y-2 w-full">
                                <div className="black_small_header">Управляющее подразделение</div>
                                <select className="choice">
                                    <option>Сотрудники</option>
                                    <option>Студенты</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Образовательный стандарт</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Уровень подготовки</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Код(ОКСО)</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Направление(специальность)</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Вид возмещения затрат</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Курс</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Форма освоения</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Технология освоения</div>
                                <select className="choice">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="black_bold_header">2. Академические группы</div>
                    </div>
                    <div className="flex flex-col gap-y-3 flex-wrap">
                        <div className="black_bold_header">3. Учебные группы</div>
                        <div className="flex gap-x-7 gap-y-3 flex-row flex-wrap">
                            <div className="two_elements">
                                <div className="black_small_header">Учебный год</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="two_elements">
                                <div className="black_small_header">Группы</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 flex-wrap">
                        <div className="black_bold_header">4. Информация по студенту</div>
                        <div className="flex gap-x-7 gap-y-3 flex-row flex-wrap">
                            <div className="three_elements">
                                <div className="black_small_header">Год рождения</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="three_elements">
                                <div className="black_small_header">Пол</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                            <div className="three_elements">
                                <div className="black_small_header">Гражданство</div>
                                <select className="choice">
                                    <option>Привет</option>
                                    <option>Привет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

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
                <div className="block_main_part_table">
                    <div className="flex flex-col gap-y-5 px-6">
                        <div className="flex flex-col gap-y-3">
                            <div className="blue_header">Общие фильтры</div>
                            <div className="flex flex-wrap flex-col gap-y-2">
                                <div className="black_small_header">Тема уведомления</div>
                                <input className="input" placeholder="Введите название уведомления"></input>
                            </div>
                            <div className="flex flex-wrap flex-col gap-y-2">
                                <div className="black_small_header">Количество адресатов</div>
                                <div className="flex flex-row gap-x-7 gap-y-3 flex-wrap">
                                    <div className="four_elements">
                                        <select className="choice">
                                            <option>Больше</option>
                                            <option>Меньше</option>
                                        </select>
                                    </div>
                                    <div className="three_four_el">
                                        <input className="input" placeholder="Введите количество адресатов"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="black_small_header">Автор</div>
                                <input className="input" placeholder="Введите автора"></input>
                            </div>
                            <div className="gap-x-7 flex flex-row flex-wrap">
                                <div className="two_elements">
                                    <div className="black_small_header">Дата начала публикации</div>
                                    <input type="date" id="datepicker" className="datepicker"/>
                                </div>
                                <div className="two_elements">
                                    <div className="black_small_header">Дата окончания публикации</div>
                                    <input type="date" id="datepicker" className="datepicker"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="blue_header">Фильтры по целевой аудитории</div>
                            <div className="flex flex-col gap-y-2">
                                <div className="black_small_header">Адресат</div>
                                <input className="input" placeholder="Введите имя адресата"></input>
                            </div>
                            <ChooseRecepientCategoryStat></ChooseRecepientCategoryStat>
                            <div className="mt-1">
                                <button className="blue_button button_text">Применить фильтры</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3.5">
                            <div className="blue_header">Примененные фильтры</div>
                            <div className="statistics_input flex mt-2">
                                <div className="statistics_elements">
                                    <div>Количество адресатов: больше 1000&nbsp;</div>
                                    <button className="cross">X</button>
                                </div>
                                <div className="statistics_elements">
                                    <div>Категория: ППС&nbsp;</div>
                                    <button className="cross">X</button>
                                </div>
                                <div className="statistics_elements">
                                    <div>Категория получателей: сотрудники&nbsp;</div>
                                    <button className="cross">X</button>
                                </div>
                                <div className="statistics_elements">
                                    <div className="statistics_elements">Период отправки: c 01 марта 2023 до 03 марта 2023&nbsp;</div>
                                    <button className="cross">X</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-x-40 mt-2">
                                <div className="flex flex-col w-50">
                                    <div className="black_bold_header">Число отправленных сообщений - 1000</div>
                                    <div className="black_bold_header">Число доставленных сообщений - 1000</div>
                                </div>
                                <div className="flex flex-col w-50">
                                    <div className="black_bold_header">Число прочитанных сообщений - 1000</div>
                                    <div className="black_bold_header">Число непрочитанных сообщений - 1000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="blue_header px-6">Список уведомлений</div>
                        <table className="table mt-7">
                            <thead>
                                <tr>
                                    <th className="first_last_column top_th"></th>
                                    <th className="top_th">Название уведомления</th>
                                    <th className="top_th">Кому</th>
                                    <th className="top_th">Дата создания уведомления</th>
                                    <th className="top_th">Автор</th>
                                    <th className="top_th">Состояние</th>
                                    <th className="top_th">Доставка</th>
                                    <th className="top_th">Дата последней доставки</th>
                                    <th className="first_last_column top_th"></th>
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
