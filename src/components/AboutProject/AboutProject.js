import React from "react";

function AboutProject(props) {
    return (
        <section className="project">
            <h2 className="main__titles" id="project">О проекте</h2>
            <div className="main__border"/>
            <div className="project__container project__container-flex">
            <div className="project__text">
                <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
                <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="project__text">
                <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
                <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            </div>
            <div className="project__container project__grid">
                <div>
                  <p className="project__backend">1 неделя</p>
                  <span className="project__span">Back-end</span>
                </div>
                <div>
                  <p className="project__frontend">4 недели</p>
                  <span className="project__span">Front-end</span>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;