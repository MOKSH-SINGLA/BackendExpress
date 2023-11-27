const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/shree',(req, res)=>{
    res.send('Welcome')
})

app.get('/Niits',(req, res)=>{
    res.send('<h1>Hi Niit</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})