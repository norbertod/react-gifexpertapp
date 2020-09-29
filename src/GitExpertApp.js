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

            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category =>
                   
                        <GifGrid 

                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
