import React, {useState} from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";
import '../StyleSheets/mailing_elements.css'
import Footer from "../Components/Footer";
import "../StyleSheets/styles.css"
import search_icon from "../Svg/search_icon.svg"
import left from "../Svg/left.svg";
import right from "../Svg/right.svg";

const ChooseRecepientCategoryStat: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Сотрудники');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex gap-y-1 flex-col flex-wrap">
            <select className="choice choice_text" value={selectedOption} onChange={handleOptionChange}>
                <option className="choice_text">Сотрудники</option>
                <option className="choice_text">Студенты</option>
            </select>
            {selectedOption === 'Сотрудники' &&
                <div className="flex gap-x-7 gap-y-1 flex-wrap">
                    <div className="four_elements">
                        <div className="black_small_header">Вид трудоустройства</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Категория</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Подразделение</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Должность</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Ученая степень</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Ученое звание</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Пол</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                    <div className="four_elements">
                        <div className="black_small_header">Год рождения</div>
                        <select className="choice choice_text">
                            <option className="choice_text">Привет</option>
                            <option className="choice_text">Привет</option>
                        </select>
                    </div>
                </div>}
            {selectedOption === 'Студенты' &&
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-7">
                        <div className="two_elements">
                            <div className="black_small_header">Выбрать для</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Привет</option>
                                <option className="choice_text">Привет</option>
                            </select>
                        </div>
                        <div className="two_elements">
                            <div className="black_small_header">Целевая аудитория(студенты)</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Личный кабинет</option>
                                <option className="choice_text">Телеграм</option>
                                <option className="choice_text">Email</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-y-0.5 mt-1">
                        <div className="black_bold_header">1. Информация об образовательной программе</div>
                        <div className="flex flex-col gap-y-1 mb-1">
                            <div className="black_small_header">Управляющее подразделение</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Сотрудники</option>
                                <option className="choice_text">Студенты</option>
                            </select>
                        </div>
                        <div className="flex gap-x-7 gap-y-1 flex-wrap">
                            <div className="four_elements">
                                <div className="black_small_header">Образовательный стандарт</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Уровень подготовки</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Код(ОКСО)</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Направление(специальность)</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Вид возмещения затрат</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Курс</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Форма освоения</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                            <div className="four_elements">
                                <div className="black_small_header">Технология освоения</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Привет</option>
                                    <option className="choice_text">Привет</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="black_bold_header">2. Академические группы</div>
                        </div>
                        <div className="mt-1">
                            <div className="black_bold_header">3. Учебные группы</div>
                            <div className="flex flex-row gap-x-7">
                                <div className="two_elements">
                                    <div className="black_small_header">Учебный год</div>
                                    <select className="choice choice_text">
                                        <option className="choice_text">Привет</option>
                                        <option className="choice_text">Привет</option>
                                    </select>
                                </div>
                                <div className="two_elements">
                                    <div className="black_small_header">Группы</div>
                                    <select className="choice choice_text">
                                        <option className="choice_text">Привет</option>
                                        <option className="choice_text">Привет</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="black_bold_header">4. Информация по студенту</div>
                            <div className="flex flex-row gap-x-7">
                                <div className="three_elements">
                                    <div className="black_small_header">Год рождения</div>
                                    <select className="choice choice_text">
                                        <option className="choice_text">Привет</option>
                                        <option className="choice_text">Привет</option>
                                    </select>
                                </div>
                                <div className="three_elements">
                                    <div className="black_small_header">Пол</div>
                                    <select className="choice choice_text">
                                        <option className="choice_text">Привет</option>
                                        <option className="choice_text">Привет</option>
                                    </select>
                                </div>
                                <div className="three_elements">
                                    <div className="black_small_header">Гражданство</div>
                                    <select className="choice choice_text">
                                        <option className="choice_text">Привет</option>
                                        <option className="choice_text">Привет</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1 gap-y-1 flex flex-col">
                        <div className="blue_header">Дополнительные фильтры</div>
                        <div>
                            <div className="black_small_header">Обязательна ли рассылка</div>
                            <div className="flex gap-x-7 mt-0.5">
                                <label className="flex gap-2">
                                    <input type="radio" value="yes" name="choice"/>
                                    Да
                                </label>
                                <label className="flex gap-2">
                                    <input type="radio" value="no" name="choice"/>
                                    Нет
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="black_small_header">Приоритет уведомления</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Высокий</option>
                                <option className="choice_text">Средний</option>
                                <option className="choice_text">Низкий</option>
                            </select>
                        </div>
                        <div className="gap-1 flex flex-col">
                            <div className="black_small_header">URL ссылки в уведомлении</div>
                            <input className="input" placeholder="Введите ссылку"></input>
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
                    <div className="flex flex-col gap-y-0.5">
                        <div className="blue_header">Общие фильтры</div>
                        <div className="flex flex-wrap flex-col gap-y-1">
                            <div className="black_small_header">Тема уведомления</div>
                            <div className="search_block">
                                <input className="search choice_text" placeholder="Введите название уведомления"></input>
                                <img src={search_icon} className="big_search_icon"></img>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col gap-y-1">
                            <div className="black_small_header">Количество адресатов</div>
                            <div className="flex flex-row gap-7">
                                <div className="four_elements">
                                    <select className="choice choice_text">
                                        <option className="choice_text">Больше</option>
                                        <option className="choice_text">Меньше</option>
                                    </select>
                                </div>
                                <div className="search_block">
                                    <input className="search choice_text" placeholder="Введите количество адресатов"></input>
                                    <img src={search_icon} className="big_search_icon"></img>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="black_small_header">Автор</div>
                            <div className="search_block">
                                <input className="search choice_text" placeholder="Введите имя автора"></input>
                                <img src={search_icon} className="big_search_icon"></img>
                            </div>
                        </div>
                        <div className="gap-x-7 flex flex-row">
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
                    <div className="mt-1">
                        <div className="blue_header">Фильтры по целевой аудитории</div>
                        <div className="flex flex-col gap-y-1 mt-0.5">
                            <div className="black_small_header">Адресат</div>
                            <div className="search_block">
                                <input className="search choice_text" placeholder="Введите имя адресата"></input>
                                <img src={search_icon} className="big_search_icon"></img>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-0.5">
                            <div className="black_small_header">Категории получателей</div>
                            <ChooseRecepientCategoryStat></ChooseRecepientCategoryStat>
                        </div>
                        <div className="flex mt-2">
                            <button className="button blue-background button_text">Применить фильтры</button>
                        </div>
                    </div>
                    <div className="mt-1.5">
                        <div className="blue_header">Примененные фильтры</div>
                        <div className="statistics_input mt-1 mb-1">
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
                        <div className="flex flex-wrap gap-x-40 ">
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
                    <div className="mt-1">
                        <div className="blue_header">Список уведомлений</div>
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
