const got = require('got')
const { capitalizeFirstLetter } = require('../utils/parse-strings.util')
const {
  DADOSBR_API_URL
} = process.env

async function handler (request, h) {
  const state = request.params.state

  try {
    const { body } = await got(`${DADOSBR_API_URL}/cidades/${state}`)
    const parsed = JSON.parse(body)
    const response = parsed.map((item) => {
      return capitalizeFirstLetter(item.split(':')[1]) || false
    })
    return h.response(response).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/cities/names/{state}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
