const got = require('got')
const {
  AIR_API_URL,
  AIR_TOKEN
} = process.env

async function getAirByGeolocation (lat, lng) {
  lat = parseFloat(lat) || 0
  lng = parseFloat(lng) || 0

  try {
    const { body } = await got(`${AIR_API_URL}/feed/geo:${lat};${lng}/?token=${AIR_TOKEN}`)
    const parsed = JSON.parse(body)
    return parsed.data
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  getAirByGeolocation
}
