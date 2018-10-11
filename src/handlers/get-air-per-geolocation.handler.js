const { parseAirQuality } = require('../utils/parse-air-quality.util')
const { getAirByGeolocation } = require('../commands/get-air-by-geolocation.command')

async function handler (request, h) {
  const lat = parseFloat(request.params.lat) || 0
  const lng = parseFloat(request.params.lng) || 0

  try {
    const data = await getAirByGeolocation(lat, lng)
    const result = await parseAirQuality(data)
    return h.response(result).code(200)
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
