const got = require('got')
const { getCitiesIds } = require('../commands/get-cities-ids.command')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function handler (request, h) {
  const city = (request.params.city) ? request.params.city : false
  
  try {
    return await getCitiesIds(request.params.state, city)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/cities/{state}/{city?}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
