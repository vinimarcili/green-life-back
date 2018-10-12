const got = require('got')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function getWeatherById (id) {
  const { body } = await got(`${CLIMATEMPO_API_URL}/api/v1/weather/locale/${id}/current?token=${CLIMATEMPO_TOKEN}`)
  return JSON.parse(body)
}

module.exports = {
  getWeatherById
}