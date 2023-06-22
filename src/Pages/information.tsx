import React from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar";
import '../StyleSheets/mailing_elements.css'
import Footer from "../Components/Footer";
import "../StyleSheets/styles.css"

export default function Information() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <main className="main_part">
                <div className="block_main_part">
                    <div className="path_page">
                        <div className="main_path_text main_first_color">Главная/</div>
                        <div className="main_path_text main_second_color">Корпоративные сервисы/Информация</div>
                    </div>
                    <div className="name_notification blue">Информация</div>
                </div>
                <div className="block_main_part">
                    <div className="flex flex-col gap-y-3">
                        <h1>Lorem Ipsum</h1>
                        <div>https://docs.google.com/document/d/1Mn99ExBR42o9aIwfl2Z8Ft0QkBwnO3BcvY74tQgiRv4/edit#</div>
                        <div>https://gitlab.urfu.ru/students/lk-mailer</div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    )
}