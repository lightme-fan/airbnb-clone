import React from 'react'

export default function Stays(props) {
    return (
        <li className='stays--list-item'>
            <img className='stays--photo' src={props.photo} alt={props.city}/>
            <div className='stays--desc'>
                {props.superHost ? <span className='supper-host'>Super Host</span>: ''}
                <span className='type'>{props.type}</span>
                <span className='rating'>{props.starIcon}{props.rating}</span>
            </div>
        </li>
    )
}