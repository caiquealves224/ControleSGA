var express = require('express');
var router = express.Router();
const db = require("../db");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ControleSGA'});
});

router.get('/chamados', (req,res,next) => {
  res.render('criarChamado', {title : 'Criar Chamado'});
});

router.post('/chamados', (req,res,next) => {
  const ocorrencias = require("../models/ocorrencias.js");
  ocorrencias.create(req.body)
  .then(()=>res.redirect("/"))
  .catch((error)=>console.log(error))
  
});



router.get("/consultarChamados", (req,res,next) => {
  res.render("consultarChamados",{title : 'Consultar Chamados'});
})

router.get("/relatorios", (req,res,next) => {
  res.render("relatorios",{title : 'relatorios'});
});

router.get("/ocorrencias/:id",(req,res,next) => {
  const ocorrencias = require("../models/ocorrencias.js");

  ocorrencias.find(req.params.id)
  .then((data) => {res.json(data);})
  .catch((error) => console.log(error))
  
})


module.exports = router;