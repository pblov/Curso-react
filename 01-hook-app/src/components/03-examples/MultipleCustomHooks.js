import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);

    const {loading,data} = useFetch( `https://los-simpsons-quotes.herokuapp.com/v1/quotes/${counter}` );
    
    const {author, quote} = !!data && data[0]; //Si existe la data, extrae la data en posición 0.

    
    return (
        <>
            <h1>TheSimpsons Quotes</h1>
            <hr/>
            
          
            
            {
                loading 
                ? 
                    (
                        
                        

                        <div className="alert alert-light text-center">
                                <div className="spinner-border text-success text-center" role="status">
                            
                                </div>
                        </div>
                    )
                :
                    (

                        <blockquote className="blockquote text-right" style={{textAlign: "right"}}>
                            <p className="mb-0">{author}</p>
                            <br/>
                            <footer className="blockquote-footer"> <cite title="Source Title">{quote}</cite></footer>
                        </blockquote>

                    )
            }
            
            <button className="btn btn-primary mt-5" onClick = {increment} > Siguiente frase </button>
            

            
        </>
    )
}
