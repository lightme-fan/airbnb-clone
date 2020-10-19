import React from 'react'

export default function SearchForm(props) {
    return (
        <>
            <input type='text' name='city' className='search--input city-name' />
            <input type='text' name='guests' className='search--input guests' />
            <button type='submit' className='search--button'>Search</button>
        </>
    )   
}