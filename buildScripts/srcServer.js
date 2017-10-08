import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port=3000;
const app=express();
const compiler=webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get('/users',(req,res)=>{
  res.json([
    {id:1,firstName:'Bob',lastName:'Dole',email:'bobby@aol.com'},
    {id:2,firstName:'Ricky',lastName:'Bobby',email:'rickybobby@nascar.com'},
    {id:1,firstName:'Timmy',lastName:'Jimmy',email:'timtim@jimjim.com'},
  ]);
})

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
