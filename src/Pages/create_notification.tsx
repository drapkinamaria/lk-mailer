import React, { useState } from 'react';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'
import "../StyleSheets/create_notifications.css"
import "../StyleSheets/navigation.css"
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
import down from '../Svg/down.svg'
import up from '../Svg/up.svg'
import plus from '../Svg/plus.svg'
import basket from "../Svg/basket.svg"
import "../StyleSheets/styles.css"
import {
    EmploymentType,
    Category,
    Gender,
    BirthYear,
    Unit,
    JobTitle,
    AcademicDergree,
    AcademicTitle
} from "../Components/EmployeeSelect"
import {Citizienship} from "../Components/StudentsSelect";

const DropDownMailingList: React.FC = () => {
    const [showElements, setShowElements] = useState(false);
    const [buttonImg, setButtonImg] = useState(showElements ? up : down);

    const handleToggle = () => {
        setShowElements(!showElements);
        setButtonImg(showElements ? down : up);
    };

    return (
        <div className="flex flex-col flex-wrap">
            <div className="flex flex-row gap-x-5">
                <div className="blue_header">Группа получателей 1</div>
                <button onClick={handleToggle}>
                    <img src={buttonImg} alt="Toggle" />
                </button>
            </div>
            {showElements && (
                <div className="flex flex-col gap-y-3.5">
                    <div className="flex flex-col gap-y-1 mt-3">
                        <div className="flex flex-row justify-between">
                            <div className="black_small_header">Категории получателей</div>
                            <button className="flex flex-row gap-x-2 items-center delete_recepient">
                                <img src={basket} className="rubber"></img>
                                <div className="red-text">Удалить группу получателей</div>
                            </button>
                        </div>
                        <ChooseRecepientCategory></ChooseRecepientCategory>
                    </div>
                </div>
            )}
        </div>
    );
};

const ChooseRecepientCategory: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Сотрудники');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex gap-y-3.5 flex-col flex-wrap">
            <select className="choice" value={selectedOption} onChange={handleOptionChange}>
                <option>Сотрудники</option>
                <option>Студенты</option>
            </select>
            {selectedOption === 'Сотрудники' &&
                <div className="flex flex-wrap gap-y-3">
                    <div className="flex gap-x-7 gap-y-3.5 flex-wrap">
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
                    </div>
                    <div className="flex flex-wrap">
                        <div className="black_bold_header">Кол-во респондентов - 267</div>
                    </div>`
                </div>
                }
            {selectedOption === 'Студенты' &&
                <div className="flex flex-wrap flex-col gap-y-3">
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
                    <div className="flex flex-wrap">
                        <div className="black_bold_header">Кол-во респондентов - 267</div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="blue_header">Обязательна ли рассылка</div>
                        <div className="flex gap-x-7">
                            <label className="flex gap-x-2">
                                <input type="radio" value="yes" name="choice"/>
                                Да
                            </label>
                            <label className="flex gap-2">
                                <input type="radio" value="no" name="choice"/>
                                Нет
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="blue_header">Параметры уведомления</div>
                        <div className="flex gap-y-3 flex-col flex-wrap">
                            <div className="flex flex-col gap-y-2">
                                <div className="black_small_header">Приоритет уведомления</div>
                                <select className="choice choice_text">
                                    <option className="choice_text">Высокий</option>
                                    <option className="choice_text">Средний</option>
                                    <option className="choice_text">Низкий</option>
                                </select>
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
                            <div className="gap-y-2 flex flex-col">
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
                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col gap-y-3">
                            <div className="blue_header">Название уведомления</div>
                            <input className="input" placeholder="Введите название уведомления"></input>
                        </div>
                        <div className="flex flex-wrap flex-col gap-y-3">
                            <div className="blue_header">Тип доставки</div>
                            <div className="flex gap-x-7">
                                <div className="flex gap-2">
                                    <input type="checkbox" value="телеграм" id="delivery"/>
                                    <label>телеграм</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" value="почта" id="delivery"/>
                                    <label>почта</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" value="оповещение" id="delivery"/>
                                    <label>оповещение в ЛК</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <DropDownMailingList></DropDownMailingList>
                            <DropDownMailingList></DropDownMailingList>
                        </div>
                        <button className="flex flex-row gap-x-2 add_recepient">
                            <img src={plus}></img>
                            <div className="blue">Добавить группу получателей</div>
                        </button>
                        <div className="flex flex-col gap-y-4">
                            <div className="blue_header">Контент</div>
                            <div>
                                <div className="gray_header">
                                    <div className="flex gap-5">
                                        <div className="flex">
                                            <button className="left_square">
                                                <img src={back} className="image"></img>
                                            </button>
                                            <button className="right_square">
                                                <img src={forward} className="image"></img>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <button className="left_square">
                                                <img src={bold} className="image"></img>
                                            </button>
                                            <button className="without_borders_square">
                                                <img src={italic} className="image"></img>
                                            </button>
                                            <button className="ordinary_square">
                                                <img src={underline} className="underline"></img>
                                            </button>
                                            <button className="right_square">
                                                <img src={rubber} className="rubber"></img>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <button className="left_square">
                                                <img src={hamburger} className="rubber"></img>
                                            </button>
                                            <button className="right_square">
                                                <img src={numbered_list} className="numbered_list"></img>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <button className="left_square">
                                                <img src={link} className="underline"></img>
                                            </button>
                                            <button className="right_square">
                                                <img src={image} className="image"></img>
                                            </button>
                                        </div>
                                        <div className="flex">
                                            <button className="square">
                                                <img src={code} className="rubber"></img>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <textarea className="content_input" placeholder="Введите текст" />
                            </div>
                        </div>
                        <div className="flex -mt-2.5">
                            <button className="blue_button button_text">Опубликовать</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    );
}
