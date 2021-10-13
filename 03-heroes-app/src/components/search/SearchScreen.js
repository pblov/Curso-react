import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroesByName';
import '../../index.css';
// import { heroes } from '../data/heroes';


export const SearchScreen = ({history}) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleinputChange ] = useForm({
        searchText:q
    });

    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${searchText}`);
       
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form </h4>
                    <hr />
                    <form action="" onSubmit={handleSearch} >
                        <input 
                            type="text" 
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange = {handleinputChange}
                            autoComplete="off"
                        />
                        <div className="row divBtnSearch">
                        <button type="submit" className="btn m-1 btn-block btn-outline-dark btnSearch ">
                            Search ...
                        </button>
                        </div>
                        
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') &&
                        <div className="alert alert-warning alert-dismissible fade show mh8" role="alert">
                            <strong>Search a hero ...</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

                    }

                    { 
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger alert-dismissible fade show mh8" role="alert">
                            <strong>There is no a hero with: {q}  </strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                    
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                            
                                key = {hero.id}
                                {...hero}

                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
