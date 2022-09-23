import React from "react";

function Techs(props) {
    return (
        <section className="techs">
            <h2 className="main__titles">Технологии</h2>
            <div className="main__border"/>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__container">
                <p className="techs__keys">HTML</p>
                <p className="techs__keys">CSS</p>
                <p className="techs__keys">JS</p>
                <p className="techs__keys">React</p>
                <p className="techs__keys">Git</p>
                <p className="techs__keys">Express.js</p>
                <p className="techs__keys">mongoDB</p>
            </div>
        </section>
    );
}

export default Techs;