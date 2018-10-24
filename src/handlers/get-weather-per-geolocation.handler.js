const { seachMaps } = require('../commands/get-search-maps.command')
const { getCitiesIds } = require('../commands/get-cities-ids.command')
const { getWeatherById } = require('../commands/get-weather-by-id.command')
const { getAirByGeolocation } = require('../commands/get-air-by-geolocation.command')
const { parseBrazilianStates } = require('../utils/parse-states.util')
const { parseAirQuality } = require('../utils/parse-air-quality.util')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function parseHandler (address) {
  const state = parseBrazilianStates(address.state)
  const city = (address.city === 'SP') ? 'São Paulo' : address.city 
  const cityObject = await getCitiesIds(state, city)
  if (cityObject.length > 0) {
    return await getWeatherById(cityObject[0].id)
  }
  return {}
}

async function handler (request, h) {
  const lat = parseFloat(request.params.lat) || 0
  const lng = parseFloat(request.params.lng) || 0

  let result = {}
   try {
      const { address } = await seachMaps(`reverse?lat=${lat}&lon=${lng}`)
      if (!address) {
        const nearLocation = await getAirByGeolocation(lat, lng)
        const nearLocationParsed = await parseAirQuality(nearLocation)
        const newLat = nearLocationParsed.geo.lat
        const newLng = nearLocationParsed.geo.lng
        const { address: newAddress } = await seachMaps(`reverse?lat=${newLat}&lon=${newLng}`)
        result = await parseHandler(newAddress)
      }

      if (address) {
        result = await parseHandler(address)
      }

      return h.response(result).code(200)
   } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  method: 'GET',
  path: '/weather/geo/{lat}/{lng}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
