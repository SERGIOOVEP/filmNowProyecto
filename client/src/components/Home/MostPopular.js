import React, { useEffect } from 'react'
import { useState } from 'react'


export const MostPopular = () => {

    const [popular, setPopular] = useState([]);
    // const token2 = 'k_86200214'
    // const token6 = 'k_46720ug0'
    // const token4 = "k_r9znpzwm"
    // token cuenta lyvegama - lyvegama@gmail.com 12345678

    // useEffect(() => {
    //     fetch(`https://imdb-api.com/en/API/Top250Movies/${token2}`)
    //     // fetch(jsonMost)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             setPopular(response.items);
    //             console.log(response.items)
    //         })

    // }, [])


console.log(popular)


    return (
        <div className="divPagPrin">

            {popular.length > 0 ? popular.slice(0, 5).map((film, i) => (

                <div key={i} >

                    <p>{film.title}</p>
                    {/* <img src={film.image}></img> */}

                </div>

            )) : <div>

                <p>"No hay resultados"</p>

            </div>}

        </div>
    )

}