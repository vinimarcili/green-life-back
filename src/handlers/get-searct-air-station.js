const got = require('got')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function handler (request, h) {
  const keyword = encodeURI(request.params.keyword) || ''

  try {
    const { body } = await got(`${AIR_API_URL}/search/?token=${AIR_TOKEN}&keyword=${keyword}`)
    const parsed = JSON.parse(body)
    
    return h.response(parsed.data).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/air/search/{keyword}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
