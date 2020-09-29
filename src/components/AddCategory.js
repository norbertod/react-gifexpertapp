import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

const [inputValue, setinputValue] = useState(''); //undefine

//evento que permite que se puede modificar el input
const handleInputChange = (e) =>{
    // console.log(e.target.value);
    setinputValue(e.target.value);
}

const handleSubmit = (e) =>{
    //la siguiente linea previene que se refresque el formulario
    e.preventDefault();
    //no deja que se cargue un string vacio
    if (inputValue.trim().length > 2){
        //agrega al principio las imagenes del ultimo item
        setCategories( cats => [inputValue,...cats ]);
        //Establece el input a un string vacio
        setinputValue('');
    }

}

    return (
        // Al agregar onSubmit={handleSubmit} al presionar enter ejecuta handleSubmit
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            //tiene el valor de lo escrito en el input
            value={inputValue}
            // onChange={(e) => console.log(e)}
            onChange={handleInputChange}
          ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
