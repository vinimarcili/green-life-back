const { seachMaps } = require('../commands/get-search-maps.command')
const { getCitiesIds } = require('../commands/get-cities-ids.command')
const { getWeatherById } = require('../commands/get-weather-by-id.command')
const { parseBrazilianStates } = require('../utils/parse-states.util')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function handler (request, h) {
  const lat = parseFloat(request.params.lat) || 0
  const lng = parseFloat(request.params.lng) || 0

  let result = {}
   try {
      const { address } = await seachMaps(`reverse?lat=${lat}&lon=${lng}`)
      if (address) {
        const state = parseBrazilianStates(address.state)
        const city = (address.city === 'SP') ? 'São Paulo' : address.city 
        const cityObject = await getCitiesIds(state, city)
        if (cityObject.length > 0) {
          result = await getWeatherById(cityObject[0].id)
        }
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
