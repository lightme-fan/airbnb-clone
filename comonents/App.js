import React, { useEffect, useState } from 'react'
import './../style.css'
import stays from './../stays.json'
import logo from './../svg/logo.svg'
import Header from './Header'
// import SearchForm from './SearchForm'
import Stays from './StayComponent'
import StaysHeading from './StaysHeading'


export default function App() {
    // const [ stays, setPlaces ] = useState(stay)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    
    const handleChange = (e) => {
        // e.preventDefault()
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const filteredByCity = stays.filter(stay => stay.maxGuests)
        setSearchResults(filteredByCity)
    }, [searchTerm])
    
    return (
        <article className='article'>
            <div className='headeing-and-searchForm'>
                <Header logo={logo}/>
                <form className='search--form' onSubmit={(e) => e.preventDefault()}>
                
                    <select 
                        className='search--input city-name' 
                        name="city" 
                        id="city-select"
                        // onChange={handleChange}
                    >
                        <option value="Helsinki">Helsinki,Finland</option>
                        <option value="Turku">Turku,Finland</option>
                        <option value="Oulu">Oulu,Finland</option>
                        <option value="Vaasa">Vaasa,Finland</option>
                    </select>
                    <input 
                        type='number' 
                        name='guests' 
                        value={searchTerm}
                        className='search--input guests'
                        onChange={handleChange} 
                    />
                    <button type='submit' className='search--button'>Search</button>
                </form>
            </div>
            <div className='stays--container'>
                <StaysHeading />
                <ul className='stays--list'>
                    {
                        searchResults.map(stay => <Stays key={stay.rating} {...stay} />)
                    }
                </ul>
            </div>
        </article>
    )
}