import React, {memo} from 'react'
//memo: renderizar si sus propiedades no han cambiado.  (optimización de memoria).
export const Small = memo(({value}) => {

    console.log("Me volvi a llamar");
    return (
        <small>
            {value}
        </small>
    )
}
)