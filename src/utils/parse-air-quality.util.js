function parseAirQuality (airObject) {
  airObject.aqi = parseInt(airObject.aqi)

  let result = {}
  console.log(airObject)
  if (airObject.aqi < 51) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Good',
        br: 'Bom'
      },
      color: 'green',
      station: airObject.attributions[0].name
    }
  } else if (airObject.aqi < 101) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Moderate',
        br: 'Moderado'
      },
      color: 'yellow',
      station: airObject.attributions[0].name
    }
  } else if (airObject.aqi < 151) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Not bad',
        br: 'Pouco ruim'
      },
      color: 'orange',
      station: airObject.attributions[0].name
    }
  } else if (airObject.aqi < 201) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Bad',
        br: 'Ruim'
      },
      color: 'red'
    }
  } else if (airObject.aqi < 301) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Too bad',
        br: 'Muito ruim'
      },
      color: 'purple',
      station: airObject.attributions[0].name
    }
  } else if (airObject.aqi > 300) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Hazardous',
        br: 'Perigoso'
      },
      color: 'black',
      station: airObject.attributions[0].name
    }
  } else {
    result = {
      index: -1,
      class: {
        en: '',
        br: ''
      },
      color: 'white',
      station: ''
    }
  }

  return result
}

module.exports = {
  parseAirQuality
}
