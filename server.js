const express = require('express')
let app = express()

app.use(express.static('./'))

app.listen(3000, () => console.log("Escutando na porta 3000"))
