import React from 'react'

export default function GuestsBtn(props) {
	return (
		<>
			<input
					type="button"
					value="Number of guests"
					onClick={props.handleClickNum}
					className='button--search searchBtn'
			/>

        </>
    )
}