# Green Life API

## Sobre

API que agrega requisições de informações socio ambientais.

# Instalação

## Dependências

- [Node.JS](http://nodejs.org)

## Inicialização

- `npm install`

- `npm start`

## Exemplo de Environment

Variavéis que devem ser definidas em um arquivo `.env` na raiz do projeto.

```
CLIMATEMPO_API_URL -> URL da API do ClimaTempo (http://apiadvisor.climatempo.com.br/api)
CLIMATEMPO_TOKEN -> Token gerado para o uso de API do ClimaTempo
AIR_API_URL -> URL da API da Air Quality (https://aqicn.org/api)
AIR_TOKEN -> Token gerado para o uso da API da Air Quality
OPEN_MAP_API -> URL da API Open Map (https://nominatim.openstreetmap.org)
```

## Rotas

### Recupa os nomes de cidades de um estado pela API do Ministério da Educação

**GET** - /cities/name/{state}

 - @param state (string) - Parametro obrigátorio com a sigla de um Estado.

Response

```js
[
  "Adamantina",
  "Adolfo"
]
```

### Recupera os IDS das cidades da API do ClimaTempo

**GET** - /cities/{state}/{city?}

 - @param state (string) - Parametro obrigátorio com a sigla de um Estado.
 - @param city (string) - Parametro opcional com o nome por exetenso de uma Cidade.

Response

```js
[
  {
     id: 4387, 
     name: 'Borá',
     state: 'SP',
     country: 'BR'
  }
]
```

### Recupera a temperatura atual de uma cidade pela API do ClimaTempo

**GET** - /temperature/{state}/{city}

 - @param state (string) - Parametro obrigátorio com a sigla de um Estado.
 - @param city (string) - Parametro obrigátorio com o nome por exetenso de uma Cidade.

Response

```js
  {
    id: 3477,
    name: "São Paulo",
    state: "SP",
    country: "BR", 
    data: {
      temperature: 19,
      wind_direction: "ENE",
      wind_velocity: 9, 
      humidity: 94,
      condition: "Céu encoberto",
      pressure: 1020,
      icon:"3", 
      sensation:19,
      date:"2018-10-07 12:53:14"
     }
   }
```

### Recupera a qualidade do ar de uma cidade especifica atravez da API do Air Quality

**GET** - /air/{state}/{city?}

 - @param state (string) - Parametro obrigátorio com a sigla de um Estado.
 - @param city (string) - Parametro opcinal com o nome por sem acentuação de uma cidade. Se deixado em branco a API ira retornar pela localização do IP da requisição.

Response

```js
{
  index:109,
  class: {
    en: "Not bad", 
    br:"Pouco ruim"
  },
  color:"orange"
}
```

### Recupera a qualidade do ar de uma cordenada geografica especifica atravez da API do Air Quality

**GET** - /air/geo/{lat}/{lng}

 - @param lat (float) - Latitude
 - @param lng (float) - Longetude

Response

```js
{
  index:109,
  class: {
    en: "Not bad", 
    br:"Pouco ruim"
  },
  color:"orange"
}
```

### Recupera a estação referencia para a obtenção do dado sobre a qualidade do ar fazendo uma busca atravez de uma palavra chave na API do Air Quality

**GET** - /air/search/{keyword}

 - @param keyword (string) - Uma palavra qualquer que será buscada na API.

Response

```js
[
  {
    "index":87,
    "class":{
        "en":"Moderate",
        "br":"Moderado"
    },
    "color":"yellow",
    "location":"Santana, São Paulo, Brazil",
    "geo":{
        "lat":-23.498181,
        "lng":-46.6263306
    }
  },
  {
    "index":80,
    "class":{
        "en":"Moderate",
        "br":"Moderado"
    },
    "color":"yellow",
    "location":"Jundiaí, São Paulo, Brazil",
    "geo":{
        "lat":-23.6527809,
        "lng":-46.7123885
    }
  }
]
```