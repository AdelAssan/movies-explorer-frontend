import React from "react";
import {Route} from "react-router-dom";

function Footer() {
    return (<>
        <Route path="/(|movies|saved-movies)">
        <footer className="footer">
            <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__signature">
                <p className="footer__text">&copy; 2022.</p>
                <a className="footer__text footer__link footer__link-git" target="_blank"  rel="noreferrer" href="https://github.com/AdelAssan">Github</a>
                <a className="footer__text footer__link footer__link-yandex" target="_blank"  rel="noreferrer" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            </div>
        </footer>
        </Route>
    </>);
}

export default Footer;