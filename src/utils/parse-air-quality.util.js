async function parseAirQuality (airObject) {
  let result = {}
  
  if (airObject.aqi < 51) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Good',
        br: 'Bom'
      },
      color: 'green'
    }
  } else if (airObject.aqi < 101) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Moderate',
        br: 'Moderado'
      },
      color: 'yellow'
    }
  } else if (airObject.aqi < 151) {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Not bad',
        br: 'Pouco ruim'
      },
      color: 'orange'
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
      color: 'purple'
    }
  } else {
    result = {
      index: airObject.aqi,
      class: {
        en: 'Hazardous',
        br: 'Perigoso'
      },
      color: 'black'
    }
  }

  return result
}

module.exports = {
  parseAirQuality
}