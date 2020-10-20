import React, { useEffect, useState } from 'react'
import './../style.css'
import stays from './../stays.json'
import logo from './../svg/logo.svg'
import Header from './Header'
import SearchForm from './SearchForm'
import Button from './Button'
import Stays from './StayComponent'
import StaysHeading from './StaysHeading'

export default function App() {
    const [ selectCity, setselectCity ] = useState('')
    const [ guests, setGuests ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const [open, setOpen] = useState(false)
    
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

    return (
        <article className='article'>
            <div className='headeing-and-searchForm'>
                <Header logo={logo}/>
                {/* <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                </Button> */}
                {/* <Collapse in={open}>
                    <div id="example-collapse-text">
                        <form className='search--form' onSubmit={(e) => e.preventDefault()}>                
                            <SearchForm value={guests} selectOnchange={handleSelect} inputOnchange={handleInput}/>
                        </form>
                    </div>
                </Collapse> */}

                <form className='search--form' onSubmit={(e) => e.preventDefault()}>                
                    <SearchForm value={guests} selectOnchange={handleSelect} inputOnchange={handleInput}/>
                </form>

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