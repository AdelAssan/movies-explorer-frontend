import React from "react";

function SearchForm(props) {
    return(
       <section className="search-form">
       <div className="search-form__form">
           <form className="search-form__container" onSubmit={props.searchHandler} noValidate>
           <div className="search-form__input-img"/>
           <input required placeholder="Фильм" className="search-form__input" type="text" onChange={props.onChangeHandler}
                  minLength="2" maxLength="30" value={props.renderedMovies || ''}  />
           <button className="search-form__btn" type="submit" onMouseDown={props.searchHandler}>Найти</button>
           </form>
           <div className='checkbox'>
               <label className="checkbox__container">
                   <input type="checkbox" onChange={props.onlyShortMovies} value={props.checkbox} defaultChecked={props.checkbox} onMouseDown={props.onlyShortMovies} />
                   <span className="checkbox__slider" />
               </label>
               <span className='checkbox__text'>Короткометражки</span>
           </div>
           </div>
       </section>
   );
}

export default SearchForm;