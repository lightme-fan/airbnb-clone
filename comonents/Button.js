import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Modal(props) {
    return (
        <>
            <input
                type="button"
                value="Location"
                onClick={props.handleClick}
                className='button--search searchBtn'
            />

            <input
                type="button"
                value="Number of guests"
                onClick={props.handleClick}
                className='button--search searchBtn'
            />

            <input
                type="button"
                value="Search"
                onClick={props.handleClick}
                className='search--button searchBtn'
            />
        </>
    )
}