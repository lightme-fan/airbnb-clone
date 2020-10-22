import React from 'react'

export default function SearchBtn(props) {
	return (
		<>
			<input
					type="button"
					value="Search"
					onClick={props.handleClick}
					className='search--button searchBtn'
			/>
		</>
	)
}