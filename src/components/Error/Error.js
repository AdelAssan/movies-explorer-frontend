import React from "react";
import {Link, useHistory} from "react-router-dom";

function Error() {
    const history = useHistory();
    return (
        <section className="error">
            <h2 className="error__title">404</h2>
            <p className="error__text">Страница не найдена</p>
            <Link className="error__link" onClick={() => history.goBack()}>Назад</Link>
        </section>
    );
}

export default Error;