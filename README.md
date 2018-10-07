# Grenn Life API

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
CLIMATEMPO_API_URL -> URL da API do ClimaTempo (apiadvisor.climatempo.com.br)
CLIMATEMPO_TOKEN -> Token gerado para o uso de API do ClimaTempo
AIR_API_URL -> URL da API da Air Quality (https://aqicn.org/api/)
AIR_TOKEN -> Token gerado para o uso da API da Air Quality
```

## Rotas

### Recupera os ids da API do ClimaTempo

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

**GET** - /air/{city?}

 - @param city (string) - Parametro opcinal com o nome por sem acentuação de uma cidade. Se deixado em branco a API ira retornar pela localização do IP. da requisição.

Response

```js
{
   "aqi":68,
   "idx":359,
   "attributions":[
      {
         "url":"http://www.cetesb.sp.gov.br/",
         "name":"CETESB - Companhia Ambiental do Estado de São Paulo"
      },
      {
         "url":"https://waqi.info/",
         "name":"World Air Quality Index Project"
      }
   ],
   "city":{
      "geo":[
         -23.5406338,
         -46.6320967
      ],
      "name":"Parque D.Pedro II, São Paulo, Brazil",
      "url":"https://aqicn.org/city/brazil/sao-paulo/parque-d.pedro-ii"
   },
   "dominentpol":"pm25",
   "iaqi":{
      "co":{
         "v":2.8
      },
      "no2":{
         "v":10.1
      },
      "o3":{
         "v":19.9
      },
      "pm10":{
         "v":23
      },
      "pm25":{
         "v":68
      },
      "so2":{
         "v":0.6
      },
      "t":{
         "v":17.6
      }
   },
   "time":{
      "s":"2018-10-07 13:00:00",
      "tz":"-03:00",
      "v":1538917200
   },
   "debug":{
      "sync":"2018-10-08T01:19:09+09:00"
   }
}
```

### Recupera a qualidade do ar de uma cordenada geografica especifica atravez da API do Air Quality

**GET** - /air/geo/{lat}/{lng}

 - @param lat (float) - Latitude
 - @param lng (float) - Longetude

Response

```js
{
   "aqi":65,
   "idx":342,
   "attributions":[
      {
         "url":"http://www.cetesb.sp.gov.br/",
         "name":"CETESB - Companhia Ambiental do Estado de São Paulo"
      },
      {
         "url":"https://waqi.info/",
         "name":"World Air Quality Index Project"
      }
   ],
   "city":{
      "geo":[
         -23.6818396,
         -46.620967
      ],
      "name":"Diadema, São Paulo, Brazil",
      "url":"https://aqicn.org/city/brazil/sao-paulo/diadema"
   },
   "dominentpol":"pm25",
   "iaqi":{
      "co":{
         "v":5.5
      },
      "no2":{
         "v":11
      },
      "o3":{
         "v":20.8
      },
      "pm10":{
         "v":24
      },
      "pm25":{
         "v":65
      },
      "so2":{
         "v":1.1
      },
      "t":{
         "v":17.6
      }
   },
   "time":{
      "s":"2018-10-07 13:00:00",
      "tz":"-03:00",
      "v":1538917200
   },
   "debug":{
      "sync":"2018-10-08T01:15:44+09:00"
   }
}
```

### Recupera a estação referencia para a obtenção do dado sobre a qualidade do ar fazendo uma busca atravez de uma palavra chave na API do Air Quality

**GET** - /air/search/{keyword}

 - @param keyword (string) - Uma palavra qualquer que será buscada na API.

Response

```js
[
   {
      "uid":371,
      "aqi":"109",
      "time":{
         "tz":"-03:00",
         "stime":"2018-10-07 13:00:00",
         "vtime":1538928000
      },
      "station":{
         "name":"Santos, São Paulo, Brazil",
         "geo":[
            -23.9628155,
            -46.3202369
         ],
         "url":"brazil/sao-paulo/santos"
      }
   },
   {
      "uid":362,
      "aqi":"74",
      "time":{
         "tz":"-03:00",
         "stime":"2018-10-07 13:00:00",
         "vtime":1538928000
      },
      "station":{
         "name":"Pinheiros, São Paulo, Brazil",
         "geo":[
            -23.5630037,
            -46.6864347
         ],
         "url":"brazil/sao-paulo/pinheiros"
      }
   }
]
```