import React from 'react'

function Country({ country }) {
	return (
		<div className='country'>
			{country.name.common}
		</div>
	)
}

export default Country