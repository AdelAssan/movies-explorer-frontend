import React from "react";
import {Link} from "react-router-dom";

function Error() {
    return (
        <section className="error">
            <h2 className="error__title">404</h2>
            <p className="error__text">Страница не найдена</p>
            <Link className="error__link" replace to={-1}>Назад</Link>
        </section>
    );
}

export default Error;