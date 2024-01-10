import React from 'react'
import Country from './Country'

function Countries({ countries, setSearchName }) {
	return (
		<div className='countries'>
			<input type="text" placeholder="search" onChange={event => setSearchName(event.target.value)}/>

			{countries
				.map((country, index) => <Country country={country} key={index} />)}
		</div>
	)
}

export default Countries