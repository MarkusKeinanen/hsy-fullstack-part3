const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
morgan.token('body', function (req, res) {
	return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :req[content-length]b :response-time ms - :res[content-length] :body'))
app.use(express.static('build'))

let persons = [
	{
		name: 'arto hellas',
		number: '111-111-111',
		id: 1
	},
	{
		name: 'Ada Lovelace',
		number: '39-44-5323523',
		id: 2
	},
	{
		name: 'Dan Abramov',
		number: '12-43-234345',
		id: 3
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 4
	},
	{
		name: 'jaska juska',
		number: '000-111-222-333-444',
		id: 5
	}
]

const generateId = () => {
	let randomId
	do randomId = Math.floor(Math.random() * Math.floor(9999999999))
	while (persons.find((p) => p.id === randomId) !== undefined)
	return randomId
}

app.get('/info', (req, res) => {
	res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date().toString()}</p>`)
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	const person = persons.find((person) => person.id === id)
	if (person) {
		response.json(person)
	} else {
		response.status(404).end()
	}
})

app.post('/api/persons', (request, response) => {
	const body = request.body

	let error = null
	if (!body.name) error = 'Missing name'
	if (!body.number) error = 'Missing number'
	if (persons.find((p) => p.name === body.name) !== undefined) error = 'Name already exists'

	if (error !== null) {
		return response.status(400).json({
			error
		})
	}
	const person = {
		name: body.name,
		number: body.number || false,
		id: generateId()
	}
	persons = persons.concat(person)
	console.log(persons)
	response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	persons = persons.filter((person) => person.id !== id)
	console.log(persons)
	response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
