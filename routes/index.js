var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let os;
  if(req.query.os) os = req.query.os ;

  res.render('index', { title: 'ControleSGA', os : os});
});

router.get('/chamados', (req,res,next) => {
  res.render('criarChamado', {title : 'Criar Chamado'});
});

router.post('/chamados', (req,res,next) => {
  const ocorrenciaModel = require("../models/ocorrencias.js");
  ocorrenciaModel.create(req.body)
  .then((id)=>res.redirect("/?os="+id))
  .catch((error)=>console.log(error))
});



router.get("/consultarChamados", (req,res,next) => {
  res.render("consultarChamados",{title : 'Consultar Chamados'});
})

router.get("/relatorios", (req,res,next) => {
  res.render("relatorios",{title : 'relatorios'});
});

router.get("/ocorrencias", (req,res,next)=>{
  const ocorrenciaModel = require("../models/ocorrencias.js");
})

router.get("/ocorrencias/:id",(req,res,next) => {
  const ocorrencias = require("../models/ocorrencias.js");

  ocorrencias.find(req.params.id)
  .then((data) => {res.json(data);})
  .catch((error) => console.log(error))
  
})


module.exports = router;