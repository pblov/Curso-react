import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesodoPesado';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const {counter,increment} = useCounter(100);

    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter} </small> </h3>
            <hr />
            <button className="btn btn-primary"  onClick={increment}> +1</button>
            <button 
                    className="btn btn-warning ms-3" 
                    onClick={ ()=>{
                        setShow(!show);
            }}>

                
            
            Show/Hide {JSON.stringify(show)} </button>

            <p> { memoProcesoPesado } </p>
        </div>
    )
}
