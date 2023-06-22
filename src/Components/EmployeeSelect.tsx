import React, {useState} from "react";
import down from '../Svg/down.svg'

interface DropdownProps {
    options: string[];
    placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, placeholder }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const hideDropdown = (): void => {
        hideTimeout = setTimeout(() => {
            setIsDropdownVisible(false);
        }, 300);
    };

    const showDropdown = (): void => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        setIsDropdownVisible(true);
    };

    const handleOptionSelect = (e: React.MouseEvent<HTMLLIElement>): void => {
        const selectedValue = e.currentTarget.textContent || '';
        setSelectedOption(selectedValue);
        hideDropdown();
    };

    return (
        <div id="container">
            <input
                className="choice"
                type="text"
                onFocus={showDropdown}
                onBlur={hideDropdown}
                placeholder={placeholder}
                value={selectedOption}
                readOnly
            />
            <img src={down} alt="Dropdown Icon" onClick={showDropdown} />
            {isDropdownVisible && (
                <ul
                    className="choice"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                    }}
                >
                    {options.map((option) => (
                        <li key={option} onClick={handleOptionSelect}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export const EmploymentType: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Вид трудоустройства</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите трудоустройство'}/>
        </div>
    );
};

export const Category: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Категория</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите категорию'}/>
        </div>
    );
};

export const JobTitle: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Должность</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите должность'}/>
        </div>
    );
};

export const Gender: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Пол</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите пол'}/>
        </div>
    );
};

export const Unit: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Подразделение</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите подразделение'}/>
        </div>
    );
};

export const BirthYear: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Год рождения</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите год рождения'}/>
        </div>
    );
};

export const AcademicDergree: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Ученая степень</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите ученую степень'}/>
        </div>
    );
};

export const AcademicTitle: React.FC = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="flex flex-col gap-y-2">
            <div className="black_small_header">Ученое звание</div>
            <Dropdown options={dropdownOptions} placeholder={'Выберите ученое звание'}/>
        </div>
    );
};
