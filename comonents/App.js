import React, { useEffect, useState } from 'react'
import './../style.css'
import stays from './../stays.json'
import logo from './../svg/logo.svg'
import Header from './Header'
import SearchForm from './SearchForm'
import Modal from './Modal'
import Stays from './StayComponent'
import StaysHeading from './StaysHeading'

console.log(stays);

export default function App() {
    const [ selectCity, setselectCity ] = useState('')
    const [ guests, setGuests ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    
    // Handle Select
    function handleSelect(e) {
        setselectCity(e.target.value)
        const filteredByCity = stays.filter(stay => stay.city.toLocaleLowerCase() === e.target.value)
        setSearchResults(filteredByCity)
        console.log(filteredByCity);
    }

    // Handle input
    function handleInput(e) {
        setGuests(e.target.value)
        const filteredByGuests = stays.filter(stay => stay.maxGuests.toString() === e.target.value)
        setSearchResults(filteredByGuests)
        console.log(filteredByGuests);
    }   

    function handleClick(e) {
        console.log(e.target);
    }
    return (
        <article className='article'>
            <div className='headeing-and-searchForm'>
                <Header logo={logo}/>
                <div className='modal'>
                    <Modal onClick={handleClick}/>
                </div>
                
                {/* <form className='search--form' onSubmit={(e) => e.preventDefault()}>                
                    <SearchForm value={guests} selectOnchange={handleSelect} inputOnchange={handleInput}/>
                </form> */}
            </div>
            <div className='stays--container'>
                <StaysHeading />
                <ul className='stays--list'>
                    { (selectCity || guests)
                        ? searchResults.map(stay => <Stays key={stay.rating} {...stay} />)
                        : stays.map(stay => <Stays key={stay.rating} {...stay} />)     
                    }
                </ul>
            </div>
        </article>
    )
}