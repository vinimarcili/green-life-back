function parseAirQuality (airObject) {
  airObject.aqi = parseInt(airObject.aqi)

  let result = {}
  if (airObject.aqi < 51) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Good',
        br: 'Bom'
      },
      color: 'green',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else if (airObject.aqi < 101) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Moderate',
        br: 'Moderado'
      },
      color: 'yellow',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else if (airObject.aqi < 151) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Not bad',
        br: 'Pouco ruim'
      },
      color: 'orange',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else if (airObject.aqi < 201) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Bad',
        br: 'Ruim'
      },
      color: 'red',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else if (airObject.aqi < 301) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Too bad',
        br: 'Muito ruim'
      },
      color: 'purple',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else if (airObject.aqi > 300) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Hazardous',
        br: 'Perigoso'
      },
      color: 'black',
      station: airObject.attributions[0].name,
      locate: airObject.city.name,
      geo: {
        lat: airObject.city.geo[0],
        lng: airObject.city.geo[1]
      }
    }
  } else {
    result = {
      index: -1,
      class: {
        en: '',
        br: ''
      },
      color: 'white',
      station: '',
      locate: '',
      geo: {
        lat: 0.00,
        lng: 0.00
      }
    }
  }

  return result
}

module.exports = {
  parseAirQuality
}
