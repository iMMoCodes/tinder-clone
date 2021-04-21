import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
	name: String,
	imgUrl: String,
})

const CardInfo = mongoose.model('CardInfo', cardSchema)

export default CardInfo
