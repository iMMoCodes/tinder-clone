import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://immocodes-tinder.herokuapp.com',
})

export default instance
