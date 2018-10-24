const got = require('got')
const { parseAirQuality } = require('../utils/parse-air-quality.util')
const { pickGeolocation } = require('../utils/parse-maps-geolocation.util')
const { seachMaps } = require('../commands/get-search-maps.command')
const { getAirByGeolocation } = require('../commands/get-air-by-geolocation.command')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function handler (request, h) {
  const city = request.params.city || 'here'
  const state = request.params.state || ''
  try {
    const { body } = await got(`${AIR_API_URL}/feed/${city}/?token=${AIR_TOKEN}`)
    const parsed = JSON.parse(body)
    let result = await parseAirQuality(parsed.data)
    if (result.index === -1) {
      const locationSeach = await seachMaps(`search?q=${city},${state}`)
      const geolocation = await pickGeolocation(locationSeach)
      const newData = await getAirByGeolocation(geolocation[0].lat, geolocation[0].lng)
      result = await parseAirQuality(newData)
    }
    return h.response(result).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/air/{state}/{city?}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
