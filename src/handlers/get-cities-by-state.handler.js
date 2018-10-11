const { getCitiesIds } = require('../commands/get-cities-ids.command')

async function handler (request, h) {
  const state = request.params.state

  try {
    const cities = await getCitiesIds(state)
    const response = cities.map((item) => {
      return item.name
    })
    return h.response(response).code(200)
  } catch (err) {
    console.error(err)
    return h.response(err).code(500)
  }
}

module.exports = {
  method: 'GET',
  path: '/cities/names/{state}',
  handler,
  options: {
    cors: {
      origin: ['*']
    }
  }
}
