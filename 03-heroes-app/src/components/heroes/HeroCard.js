import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';


const heroImages = require.context('../../assets/heroes', true);

export const HeroCard = ({ id,superhero, publisher,alter_ego,first_appearance,characters }) => {


    return (
        <Link to={`./hero/${id}`}className="my-card mx-2" style={{padding:0}}>
            <img className="img img-responsive" src={heroImages(`./${id}.jpg`).default} alt={superhero} />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="row">
                    <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br/> {first_appearance} </p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }


                    </div>
                </div>
            </div>
        </Link>
    )
}
