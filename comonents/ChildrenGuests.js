import React from 'react'

export default function ChildrenNum(props) {
    return (
        <>
            <h3>Number of Children</h3>
            <div className='increament-number'>        
                <button type='button'onClick={props.dicreamentChild}>-</button>
                <span>{props.number}</span>
                <button type='button' onClick={props.increamentChild}>+</button>
            </div>
        </>
    )
}  