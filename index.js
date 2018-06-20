const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//JWT
app.post('/login',(req,res)=>{
    let body=req.body
    if (body.username == 'Eko' && body.password == 'asdfgh'){
        let token=jwt.sign({'Hello':'world'},'hahaha')
        res.send(token)
    }else{
        res.status(403).end('Forbiden')
    }
})

app.get('/myname',(req,res)=>{
    var token = req.headers['authorization']
    jwt.verify(token,'hahaha',function(err,decoded){
        if(decoded == undefined){
            res.status(403).end('Forbiden')
        }else{
            res.status(200).end('Success')
        }
    })
})

//GET
app.get('/',(req,res)=>{
    let obj = {
        'username':'Eko Meidianto',
        'hobby':'Futsal'
    }
    res.json(obj)
})

app.get('/myname/:userid',(req,res)=>{
    let userid = req.params.userid
    res.send('Eko Meidianto ' + userid)
})

//POST
app.post('/user',(req,res)=>{
    let body = req.body
    res.json(body)
})

//PUT
app.put('/user',(req,res)=>{
    let body = req.body
    res.json(body)
})

//DELETE
app.delete('/user',(req,res)=>{
    let body = req.body
    res.json(body)
})

app.listen(3000)