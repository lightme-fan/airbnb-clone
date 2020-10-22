import React from 'react'

export default function LocationBtn(props) {
	return (
		<>
			<input
					type="button"
					value="Location"
					onClick={props.handleClickLocation}
					className='button--search searchBtn'
			/>
        </>
    )
}