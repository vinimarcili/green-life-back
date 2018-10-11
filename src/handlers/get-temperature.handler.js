const got = require('got')
const { getCitiesIds } = require('../commands/get-cities-ids.command')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function handler (request, h) {
  try {
    const cityObject = await getCitiesIds(request.params.state, request.params.city)
    let parsed = {}

    if (cityObject.length > 0) {
      const { body } = await got(`${CLIMATEMPO_API_URL}/api/v1/weather/locale/${cityObject[0].id}/current?token=${CLIMATEMPO_TOKEN}`)
      parsed = JSON.parse(body)
    }

    return parsed
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  method: 'GET',
  path: '/temperature/{state}/{city}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
