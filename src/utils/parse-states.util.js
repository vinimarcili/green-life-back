function parseBrazilianStates (state) {
  switch (state) {
    case "Acre":
      return "AC"
      break
    case "Alagoas":
      return "AL"
      break
    case "Amapá":
      return "AP"
      break
    case "Amazonas":
      return "AM"
      break
    case "Bahia":
      return "BA"
      break
    case "Ceará":
      return "CE"
      break
    case "Distrito Federal":
      return "DF"
      break
    case "Espirito Santo":
      return "ES"
      break
    case "Goiás":
      return "GO"
      break
    case "Maranhão":
      return "MA"
      break
    case "Mato Grosso":
      return "MT"
      break
    case "Mato Grosso do Sul":
      return "MS"
      break
    case "Minas Gerais":
      return "MG"
      break
    case "Pará":
      return "PA"
      break
    case "Paraíba":
      return "PB"
      break
    case "Paraná":
      return "PR"
      break
    case "Pernambuco":
      return "PE"
      break
    case "Piauí":
      return "PI"
      break
    case "Rio de Janeiro":
      return "RJ"
      break
    case "Rio Grande do Norte":
      return "RN"
      break
    case "Rio Grande do Sul":
      return "RS"
      break
    case "Rondônia":
      return "RO"
      break
    case "Roraima":
      return "RR"
      break
    case "Santa Catarina":
      return "SC"
      break
    case "São Paulo":
      return "SP"
      break
    case "Sergipe":
      return "SE"
      break
    case "Tocantins":
      return "TO"
      break
    default:
      return state
  }
}

module.exports = {
  parseBrazilianStates
}