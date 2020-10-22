import React, { useEffect, useState } from 'react'
import './../style.css'
import stays from './../stays.json'
import logo from './../svg/logo.svg'
import Header from './Header'
import SearchForm from './SearchForm'
import Button from './Button'
import Stays from './StayComponent'
import StaysHeading from './StaysHeading'
import Popup from './Modal';

export default function App() {
    const [ selectCity, setselectCity ] = useState('')
    const [ guests, setGuests ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const [isOpen, setIsOpen] = useState(false);
 
    // Popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // Popup
    const hidePopup = () => {
        setIsOpen(isOpen);
    }
    
    // Handle Select
    function handleSelect(e) {
        setselectCity(e.target.value)
        const filteredByCity = stays.filter(stay => stay.city.toLocaleLowerCase() === e.target.value)
        setSearchResults(filteredByCity);
    }

    // Handle input
    function handleInput(e) {
        setGuests(e.target.value)
        const filteredByGuests = stays.filter(stay => stay.maxGuests.toString() === e.target.value)
        setSearchResults(filteredByGuests);
        
    }   
  
    return (
        <article className='article'>
            <div className='headeing-and-searchForm'>
                <Header logo={logo}/>
                
                <div>
                    <Button handleClick={togglePopup} onHide={hidePopup}/>
                    { isOpen ? <Popup 
                        content={
                            <>
                                <form className='search--form' onSubmit={e => preventDefault()}>                
                                    <SearchForm 
                                        value={guests} 
                                        selectOnchange={handleSelect} 
                                        inputOnchange={handleInput} 
                                    />
                                </form>
                            </>
                        }
                        handleClose={togglePopup}
                        />
                        : ''
                    }
                </div>    
            </div>

            <div className='stays--container'>
                <StaysHeading />
                <ul className='stays--list'>
                    { (selectCity || guests)
                        ? searchResults.map(stay => <Stays key={stay.rating} {...stay} />)
                        : stays.map(stay => <Stays key={stay.rating} {...stay}/>)     
                    }
                </ul>
            </div>
        </article>
    )
}