import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
    const [searchResult, setSearchResult] = React.useState([]);
    const [checkbox, setCheckbox] = React.useState(false);
    const [find, setFind] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [renderedMovies, setRenderedMovies] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    React.useEffect(() => {
        if (props.savedMovie.length > 0) {
            setSearchResult(props.savedMovie);
        }
    }, [props.savedMovie]);

    React.useEffect(() => {
        if (props.savedMovie.length === 0) {
            setSearchResult(props.savedMovie)
        }
    }, [props.onDelete]);

    React.useEffect(() => {
        const filteredMovies = props.onFilter(props.savedMovie, renderedMovies, checkbox);
        setSearchResult(filteredMovies);
        setFind(false);
        setError(false);
        if (filteredMovies.length === 0 && renderedMovies.length > 0) {
            setErrorMessage('Ничего не найдено');
            return setError(true);
        }
    }, [find, checkbox]);

    function onlyShortMovies() {
        setCheckbox(!checkbox)
    }

    function searchHandler(evt) {
        evt.preventDefault();
        if (renderedMovies === '') {
            setErrorMessage('Введите ключевое слово');
            return setError(true);
        }
        else {
            setFind(true);
        }
    }

    function onChangeHandler(evt) {
        setRenderedMovies(evt.target.value);
    }

    return(
        <section className="saved-movies">
            <SearchForm renderedMovies={renderedMovies} onChangeHandler={onChangeHandler} onlyShortMovies={onlyShortMovies}
                        searchHandler={searchHandler} checkbox={checkbox} />
                        <MoviesCardList
                            movie={searchResult} onDelete={props.onDelete} isLoading={props.isLoading} error={error} errorMessage={errorMessage}
                        />
        </section>
    );
}

export default SavedMovies;