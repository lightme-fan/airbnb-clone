import React, { useEffect, useState } from 'react'
import './../style.css'
import stays from './../stays.json'
import logo from './../svg/logo.svg'
import Header from './Header'
import SearchForm from './SearchForm'
import GuestsBtn from './GuestsBtn'
import LocationBtn from './LocationBtn'
import SearchBtn from './SearchBtn'

import Stays from './StayComponent'
import StaysHeading from './StaysHeading'
import Popup from './Modal';
import AdultNum from './AdultGuests';
import ChildrenNum from './ChildrenGuests';


export default function App() {
  const [selectCity, setselectCity] = useState('')
  const [guests, setGuests] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const [ count, setCount ] = useState(0)
  const [ childCount, setChildCount ] = useState(0)

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
        <Header logo={logo} />

        <div>
          <GuestsBtn handleClickNum={togglePopup}/>
          {isOpen && <Popup
            content={
              <>
                <form className='search--form' onSubmit={e => preventDefault()}>
                  <SearchForm
                    value={guests}
                    selectOnchange={handleSelect}
                    inputOnchange={handleInput}
                  />
                  <AdultNum number={count} dicreament={() => setCount(count - 1)} increament={() => setCount(count + 1)}/>
                  <ChildrenNum number={childCount} dicreamentChild={() => setChildCount(childCount - 1)} increamentChild={() => setChildCount(childCount + 1)}/>
                </form>
              </>
            }
            handleClose={togglePopup}
          /> 
          }

          <LocationBtn handleClickLocation={togglePopup}/>
          {isOpen && <Popup
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
          }

          <SearchBtn handleClick={togglePopup}/>          
          {isOpen && <Popup
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
          }
        </div>
      </div>

      <div className='stays--container'>
        <StaysHeading />
        <ul className='stays--list'>
          {(selectCity || guests)
            ? searchResults.map(stay => <Stays key={stay.rating} {...stay} />)
            : stays.map(stay => <Stays key={stay.rating} {...stay} />)
          }
        </ul>
      </div>
    </article>
  )
}