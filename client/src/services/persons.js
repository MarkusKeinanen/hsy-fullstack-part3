import axios from 'axios'

const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/persons' : '/api/persons'

const getAll = () => {
	const req = axios.get(baseUrl)
	return req.then((response) => response.data)
}

const create = (newObject) => {
	const req = axios.post(baseUrl, newObject)
	return req.then((response) => response.data)
}

const update = (id, newObject) => {
	const req = axios.put(baseUrl + `/${id}`, newObject)
	return req.then((response) => response.data)
}

const deleteId = (id) => {
	const req = axios.delete(baseUrl + `/${id}`)
	return req.then((response) => response.data)
}

export default {
	getAll,
	create,
	delete: deleteId,
	update: update
}
