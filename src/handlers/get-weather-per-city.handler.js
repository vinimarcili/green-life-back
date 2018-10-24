const { getCitiesIds } = require('../commands/get-cities-ids.command')
const { getWeatherById } = require('../commands/get-weather-by-id.command')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function handler (request, h) {
  try {
    const cityObject = await getCitiesIds(request.params.state, request.params.city)
    let result = {}

    if (cityObject.length > 0) {
      result = await getWeatherById(cityObject[0].id)
    }

    return h.response(result).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/weather/{state}/{city}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
