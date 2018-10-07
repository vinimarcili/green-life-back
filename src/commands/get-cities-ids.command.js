const got = require('got')
const {
  CLIMATEMPO_API_URL,
  CLIMATEMPO_TOKEN
} = process.env

async function getCitiesIds (state, city) {
  city = (city) ? `&name=${encodeURI(city)}` : ''
  state = encodeURI(state)
  
  try {
    const { body } = await got(`${CLIMATEMPO_API_URL}/api/v1/locale/city?state=${state}${city}&token=${CLIMATEMPO_TOKEN}`)
    const parsed = JSON.parse(body)

    return parsed
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  getCitiesIds
}