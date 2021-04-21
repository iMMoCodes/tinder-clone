import CardInfo from '../models/tinderCards.js'

// Get Cards
export const getCards = async (req, res) => {
	try {
		const tinderCards = await CardInfo.find()
		res.status(200).json(tinderCards)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

// Create Card
export const createCard = async (req, res) => {
	const card = req.body

	const newCard = new CardInfo(card)

	try {
		await newCard.save()
		res.status(201).json(newCard)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}
