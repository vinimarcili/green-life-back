function pickGeolocation (locations) {
  if (locations instanceof Array) {
    return locations.map((item) => {
      return {
        lat: item.lat,
        lng: item.lon,
        name: item.display_name
      }
    })
  } else if (locations) {
    return {
      lat: locations.lat,
      lng: locations.lon,
      name: locations.display_name
    }
  } else {
    return {}
  }
}

module.exports = {
  pickGeolocation
}
