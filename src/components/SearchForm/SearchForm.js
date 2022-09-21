import React from "react";

function SearchForm(props) {
   return(
       <section className="search-form">
       <form className="search-form__form" >
           <div className="search-form__container">
           <div className="search-form__input-img"/><input required placeholder="Фильм" className="search-form__input" type="text"/>
           <button className="search-form__btn" type="submit">Найти</button>
           </div>
       <div className="search-form__switch">
              <input className="search-form__switch-btn" id="switch" type="checkbox"/>
           <label for="switch" className="search-form__switch-for"/>
           <p className="search-form__switch-text">Короткометражки</p>
       </div>
           </form>
       </section>
   );
}

export default SearchForm;