import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axios'

import TinderCard from 'react-tinder-card'

import './Cards.css'

const Cards = () => {
	const [people, setPeople] = useState([])

	const fetchData = async () => {
		const req = await axiosInstance.get('/tinder/cards')

		setPeople(req.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

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
						<div style={{ backgroundImage: `url(${person.imgUrl})` }} className='card'>
							<h1>{person.name}</h1>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default Cards
