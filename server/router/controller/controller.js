
const express =  require("express");
const router = express.Router();
const body = require('body-parser')
const PDFDocument = require('pdfkit');
const fs = require('fs');


router.use(body.urlencoded())

//home controller

exports.home = (req,res)=>{

    res.render('home.pug',{title:"Home"});
}

//create pdf

exports.create = (req,res) => {
// console.log(req.body.username)
if(req.body.username != "" || req.body.content != "" || req.body.filename != "" )
{

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(`./pdf/${req.body.filename}.pdf`));

// Embed a font, set the font size, and render some text
doc
  .fontSize(25)
  .text(`My name is ${req.body.username} \n Content :- ${req.body.content}`, 100, 100);

doc.end()

res.render("download.pug",{title:"Download",pdfname:`${req.body.filename}`})

}

else{

  res.render("home.pug",{title : "Home",
    msg:"All fields are mandatory !!!"
  });

}

}

// download pdf

exports.download = (req,res) => {

    res.download(`./pdf/${req.params.id}.pdf`,`${req.params.id}`)

}
