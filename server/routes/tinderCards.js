import express from 'express'

import { getCards, createCard } from '../controllers/tinderCards.js'

const router = express.Router()

router.get('/', getCards)
router.post('/', createCard)

export default router
