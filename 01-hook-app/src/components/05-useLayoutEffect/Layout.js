import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment } = useCounter(1);

    const {data} = useFetch( `https://los-simpsons-quotes.herokuapp.com/v1/quotes/${counter}` );
    
    const { quote} = !!data && data[0]; //Si existe la data, extrae la data en posición 0.

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote]);
    
    return (
        <>
            <h1>Layout Effect</h1>

            <hr/>
                            <blockquote className="blockquote text-right">
                                <br/>
                                <cite ref={pTag} title="Source Title">{quote}</cite>
                            </blockquote>

                <pre>
                    {JSON.stringify(boxSize,null,3)}
                </pre>

            <button className="btn btn-primary mt-5" onClick = {increment} > Siguiente frase </button>
            

            
        </>
    )
}
