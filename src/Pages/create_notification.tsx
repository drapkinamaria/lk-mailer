import React, { useState } from 'react';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'
import "../StyleSheets/create_notifications.css"
import back from '../Svg/arrow-go-back-svgrepo-com.svg'
import forward from '../Svg/arrow-go-forward-svgrepo-com.svg'
import bold from '../Svg/bold-svgrepo-com.svg'
import italic from '../Svg/italic-svgrepo-com.svg'
import underline from '../Svg/underline-svgrepo-com.svg'
import rubber from '../Svg/rubber-svgrepo-com.svg'
import hamburger from '../Svg/hamburger-menu-svgrepo-com.svg'
import numbered_list from '../Svg/numbered-list-svgrepo-com.svg'
import link from '../Svg/link-svgrepo-com.svg'
import image from '../Svg/image-svgrepo-com.svg'
import code from '../Svg/code-svgrepo-com.svg'
import "../StyleSheets/styles.css"

const ChooseRecepientCategory: React.FC = () => {
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
                    <div className="-mb-1.5">
                        <div className="black_bold_header">Кол-во респондентов - 267</div>
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
                            <div className="mt-1">
                                <div className="black_bold_header">Кол-во респондентов - 267</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-1">
                        <div className="blue_header">Обязательна ли рассылка</div>
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
                    <div className="mt-1">
                        <div className="blue_header">Параметры уведомления</div>
                        <div className="flex gap-y-1 flex-col flex-wrap mt-0.5">
                            <div className="black_small_header">Приоритет уведомления</div>
                            <select className="choice choice_text">
                                <option className="choice_text">Высокий</option>
                                <option className="choice_text">Средний</option>
                                <option className="choice_text">Низкий</option>
                            </select>
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
                            <div className="-mt-5 gap-1 flex flex-col">
                                <div className="black_small_header">URL ссылки в уведомлении</div>
                                <input className="input" placeholder="Введите ссылку"></input>
                            </div>
                        </div>
                    </div>
                </div>
                }
        </div>
    );
};

export default function CreateNotification() {

    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Создать уведомление</div>
                    </div>
                    <div className="name_notification blue">Создать уведомление</div>
                </div>
                <div className="block_main_part">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="blue_header">Название уведомления</div>
                        <input className="input" placeholder="Введите название уведомления"></input>
                    </div>
                    <div className="flex flex-wrap flex-col gap-y-1 mt-1">
                        <div className="blue_header">Тип доставки</div>
                        <div className="flex gap-x-7">
                            <div className="flex gap-2">
                                <input type="checkbox" value="телеграм"/><label>телеграм</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" value="почта"/><label>почта</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" value="оповещение"/><label>оповещение в ЛК</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-1">
                        <div className="blue_header">Кому</div>
                        <div className="flex flex-col gap-y-1 mt-0.5">
                            <div className="black_small_header">Категории получателей</div>
                            <ChooseRecepientCategory></ChooseRecepientCategory>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-1.5">
                        <div className="blue_header">Контент</div>
                        <div>
                            <div className="gray_header">
                                <div className="flex gap-5">
                                    <div className="flex">
                                        <button className="left_square">
                                            <img src={back}></img>
                                        </button>
                                        <button className="right_square">
                                            <img src={forward}></img>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button className="left_square">
                                            <img src={bold}></img>
                                        </button>
                                        <button className="without_borders_square">
                                            <img src={italic}></img>
                                        </button>
                                        <button className="ordinary_square">
                                            <img src={underline}></img>
                                        </button>
                                        <button className="right_square">
                                            <img src={rubber} className="h-6 px-1"></img>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button className="left_square">
                                            <img src={hamburger} className="hamburger"></img>
                                        </button>
                                        <button className="right_square">
                                            <img src={numbered_list}></img>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button className="left_square">
                                            <img src={link}></img>
                                        </button>
                                        <button className="right_square">
                                            <img src={image}></img>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button className="square">
                                            <img src={code} className="code"></img>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <textarea className="content_input" placeholder="Введите текст" />
                        </div>
                        <div className="flex -mt-0.5">
                            <button className="button blue-background button_text">Добавить отписку</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    );
}
