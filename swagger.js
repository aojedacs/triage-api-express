const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/urgencies.js','./api/routes/patients.js']

swaggerAutogen(outputFile, endpointsFiles)