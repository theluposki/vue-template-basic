const express = require('express')
const history = require('connect-history-api-fallback')

const port = 3000
const app = express()

app.use(history())

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('public/index.html')
})

app.listen(port, () => console.log(`app rodando na http://localhost:${port}`))