const got = require('got')
const {
  OPEN_MAP_API
} = process.env

async function seachMaps (query) {
  try {
    const { body } = await got(`${OPEN_MAP_API}/${encodeURI(query)}&format=json`)
    return JSON.parse(body)
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  seachMaps
}
