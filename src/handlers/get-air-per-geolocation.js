const got = require('got')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function handler (request, h) {
  const lat = request.params.lat || 0
  const lng = request.params.lng || 0

  try {
    const { body } = await got(`${AIR_API_URL}/feed/geo:${lat};${lng}/?token=${AIR_TOKEN}`)
    const parsed = JSON.parse(body)
    
    return h.response(parsed.data).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/air/geo/{lat}/{lng}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
