import React from 'react'

export default function SearchForm(props) {
    return (
        <>
            <select 
                className='search--input city-name' 
                name="city" 
                id="city-select"
                onChange={props.selectOnchange}
            >
                <option value="" defaultValue>Select a city</option>
                <option value="helsinki">Helsinki,Finland</option>
                <option value="turku">Turku,Finland</option>
                <option value="oulu">Oulu,Finland</option>
                <option value="vaasa">Vaasa,Finland</option>
            </select>
            <input 
                type='number' 
                name='guests'
                value={props.value} 
                className='search--input guests'
                placeholder='Number of guests' 
                onChange={props.inputOnchange}
            />
            <span className='button--wrap'>
            <button type='submit' className='hit--button'>Search</button>
            </span>
        </>
    )   
}