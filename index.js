require('dotenv').config()

const express = require('express')

const app = express()


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res)=>{
    res.send('Vijaysharma1172')
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Hello Vijay</h2>')
})

app.get('/insta',(req,res)=>{
  res.send('<h1>This is my insta vijaysharma11702 </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})