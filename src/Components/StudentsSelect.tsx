import React, {useState} from "react";
import {Dropdown} from "./EmployeeSelect"

export const CodeOKSO : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Код(ОКСО)</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите вид затрат'}/>
        </div>
    );
}

export const Specialization : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Вид возмещения затрат</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите вид затрат'}/>
        </div>
    );
}

export const CostsType : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Вид возмещения затрат</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите вид затрат'}/>
        </div>
    );
}

export const Course : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Курс</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите курс'}/>
        </div>
    );
}

export const FormDevelopment : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Форма освоения</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите форму освоения'}/>
        </div>
    );
}

export const TechnologyDevelopment : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Технология освоения</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите технологию освоения'}/>
        </div>
    );
}

export const Groups : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Группы</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите группу'}/>
        </div>
    );
}

export const AcademicYear : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Учебный год</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите год'}/>
        </div>
    );
}

export const NotificationPriority : React.FC = () => {
    const dropdownOptions = ['Высокий', 'Средний', 'Низкий'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Приоритет уведомления</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите приоритет уведомления'}/>
        </div>
    );
};

export const GenderStudent: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Пол</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите пол'}/>
        </div>
    );
};

export const BirthYearStudent: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Год рождения</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите год рождения'}/>
        </div>
    );
};

export const Citizienship : React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Гражданство</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите страну гражданства'}/>
        </div>
    );
};