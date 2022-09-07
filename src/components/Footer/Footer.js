import React from "react";

function Footer() {
    return (<>
        <footer className="footer">
            <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__signature">
                <p className="footer__text">&copy; 2022.</p>
                <a className="footer__text footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                <a className="footer__text" href="https://github.com/AdelAssan">Github</a>
            </div>
        </footer>
    </>);
}

export default Footer;