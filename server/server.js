'use strict';

const express= require('express');
const bodyParser= require('body-parser');
const multer = require('multer');
const path=require('path');
const app= express();
const PORT=process.env.PORT || 3000;
const storage=multer.diskStorage({
    destination:function (req,file,cb){//Indica la carpeta de destino
        cb(null,path.join(__dirname,'/public/uploads'));
    },
    filename:function(req,file,cb){//Indica el nombre del archivo
        cb(null,`${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
    }
});
const uploader=multer({storage});//Se guardara la imagen en el servidor

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,OPTIONS,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Accept');
    next();
});
app.use(express.static(path.join(__dirname,'/public')));

app.post('/picture',uploader.single('file'),(req,res)=>{
    const {file,body}=req;//req.file existe gracias al middleware de multer
    res.status(200).json({
        body:body,
        file:file
    })
})

app.listen(PORT,function listen(){
    console.log(`Server listening on port ${PORT}`);
});