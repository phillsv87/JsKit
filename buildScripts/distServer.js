import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port=3000;
const app=express();

app.use(compression());
app.use(express.static('dist'));


app.get('/users',(req,res)=>{
  res.json([
    {id:1,firstName:'Bob',lastName:'Dole',email:'bobby@aol.com'},
    {id:2,firstName:'Ricky',lastName:'Bobby',email:'rickybobby@nascar.com'},
    {id:1,firstName:'Timmy',lastName:'Jimmy',email:'timtim@jimjim.com'},
  ]);
})

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
