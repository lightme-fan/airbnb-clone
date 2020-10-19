import React from 'react'
import './../style.css'
import logo from './../svg/logo.svg'
import Header from './Header'

export default function App() {
    return (
        <article className='article'>
            <Header logo={logo}/>
            <form className='search--form'>
                <input type='text' className='search--input city-name' />
                <input type='text' className='search--input guests' />
                <button type='submit' className='search--button'>Search</button>
            </form>
        </article>
    )
}