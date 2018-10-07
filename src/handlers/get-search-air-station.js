const got = require('got')
const { parseAirQuality } = require('../utils/parse-air-quality.util')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function handler (request, h) {
  const keyword = encodeURI(request.params.keyword) || ''

  try {
    const { body } = await got(`${AIR_API_URL}/search/?token=${AIR_TOKEN}&keyword=${keyword}`)
    const parsed = JSON.parse(body)
    
    const result = await parsed.data.map((obj) => {
      let parsedObject = parseAirQuality(obj)
      parsedObject.location = obj.station.name
      parsedObject.geo = {
          lat: obj.station.geo[0],
          lng: obj.station.geo[1]
        }
      return parsedObject
    })

    return h.response(result).code(200)
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
