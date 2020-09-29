import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    //const categories = ['one punch','samuray x','Dragon Ball'];
    const [categories, setCategories] = useState( ['one punch']);

    // const handleAdd = () => {
    //     //usando el operador de propagacion ... añando norber al arreglo
    //     // setcategories( ['Nober', ...categories ]);
    //     //setcategories devuelve un response
    //     setcategories( cats => [...cats, 'Cami']);


    //     console.log(categories);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* se pasa al componente AddCategory una propiedad llamada setCategories 
            en esta vez es un arreglo con el valor one punch */}
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category =>
                        // <li key={category}>{category}</li>
                        <GifGrid 
                        // se agrega la opcion que sino da error, se pasa la catagoria y no el id
                        // porque todavia no hay
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
