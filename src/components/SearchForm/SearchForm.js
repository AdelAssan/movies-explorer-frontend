import React from "react";

function SearchForm(props) {

    //const [checkbox, setCheckbox] = React.useState(false);

   // function alert (){
      //  console.log('skjdfhvsdljk');
   // }

    return(
       <section className="search-form">
       <form className="search-form__form" onSubmit={props.searchHandler} noValidate>
           <div className="search-form__container">
           <div className="search-form__input-img"/>
           <input required placeholder="Фильм" className="search-form__input" type="text" onChange={props.onChangeHandler}
                  minLength="2" maxLength="30" value={props.renderedMovies || ''}  />
           <button className="search-form__btn" type="submit" onMouseDown={props.searchHandler}>Найти</button>
           </div>
           <div className='checkbox'>
               <label className="checkbox__container">
                   <input className="checkbox__input" type="checkbox" onChange={props.onlyShortMovies} value={props.checkbox} checked={props.checkbox} />
                   <span className="checkbox__slider" />
               </label>
               <span className='checkbox__text'>Короткометражки</span>
           </div>
           </form>
       </section>
   );
}

export default SearchForm;