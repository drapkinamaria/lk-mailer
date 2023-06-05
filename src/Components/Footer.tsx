import React from "react";
import '../StyleSheets/footer.css';
import '../StyleSheets/text_styles.css'
import '../StyleSheets/colors.css'
import "../StyleSheets/styles.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex justify-center mt-6 mb-6">
                <div className="main_path_text footer_color">
                    © ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина» 2020-2023
                </div>
            </div>
        </footer>
    )
}
