const got = require('got')
const { parseAirQuality } = require('../utils/parse-air-quality.util')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function handler (request, h) {
  const city = request.params.city || 'here'
  try {
    const { body } = await got(`${AIR_API_URL}/feed/${city}/?token=${AIR_TOKEN}`)
    const parsed = JSON.parse(body)
    const result = await parseAirQuality(parsed.data)
    return h.response(result).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/air/{city?}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
