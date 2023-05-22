import React from "react";
import '../StyleSheets/footer.css';
import '../StyleSheets/text_styles.css'
import '../StyleSheets/colors.css'
import "../index.css";
import "tailwindcss/tailwind.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex justify-center">
                <div className="main_path_text footer_color">
                    © ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина» 2020-2023
                </div>
            </div>
        </footer>
    )
}
