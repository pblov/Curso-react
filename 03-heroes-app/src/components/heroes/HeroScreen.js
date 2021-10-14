import React, { useMemo } from 'react';
import { useParams,Redirect } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';
//import batman from '../../assets/heroes/dc-batman.jpg';

import '../../index.css';



const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {


   
    const {heroeId} = useParams();
    

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);


    if ( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => { 
        if(history.length <= 2 ){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }


    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="d-flex justify-content-center" id="heroScreen">
            <div className="col-4 px-5">
                <img  src={heroImages(`./${heroeId}.jpg`).default}  alt={superhero} className="img-fluid img-details1 img-thumbnail" />
            </div>
            <div className="col-4">
                <h3>{superhero}</h3>
                <hr />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                    <li className="list-group-item"><b>Characters: </b>{characters}</li>
                </ul>
                <div className="row btnReturn mt-5">
                    <button className="btn btn-outline-dark" onClick={handleReturn}>
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
