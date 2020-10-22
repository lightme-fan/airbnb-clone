import React from 'react'

export default function AdultNum(props) {
    return (
        <>
            <h3>Number of adult</h3>
            <div className='increament-number'>        
                <button type='button'onClick={props.dicreament}>-</button>
                <span>{props.number}</span>
                <button type='button' onClick={props.increament}>+</button>
            </div>
        </>
    )
}  