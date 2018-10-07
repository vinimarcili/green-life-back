const Hapi = require('hapi')

const server = Hapi.server({
  port: process.env.PORT || 9090
})

module.exports = {
  server
}
