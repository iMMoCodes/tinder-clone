import React, { useState } from 'react'

import TinderCard from 'react-tinder-card'

import './Cards.css'

const Cards = () => {
	const [people, setPeople] = useState([
		{
			name: 'Elon Musk',
			url: 'https://images.cdn.yle.fi/image/upload//w_1199,h_781,f_auto,fl_lossy,q_auto:eco/13-3-10292974.jpg',
		},
		{
			name: 'Jeff Bezos',
			url:
				'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
		},
	])

	const swiped = (direction, nameToDelete) => {
		console.log('removing' + nameToDelete)
		// setLastDirection(direction)
	}

	const outOfFrame = (name) => {
		console.log(name + 'left the screen!')
	}

	return (
		<div className='tinderCards'>
			<div className='tinderCards__cardContainer'>
				{people.map((person) => (
					<TinderCard
						className='swipe'
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div style={{ backgroundImage: `url(${person.url})` }} className='card'>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default Cards
