const express = require('express');
const router  = express.Router();

// Importando Models
const ocorrenciaModel  = require("../models/ocorrencias.js");
const osModel          = require("../models/os.js");

router.get('/', function(req, res, next) {
  if(req.query.os) var os = req.query.os;
  res.render('index', { title: 'ControleSGA', os : os});
});

router.get('/chamados', (req,res,next) => {
  res.render('chamados/criarChamado', {title : 'Criar Chamado'});
});

router.post('/chamados', (req,res,next) => {
  ocorrenciaModel.create(req.body)
  .then((id)=>res.redirect("/?os="+id))
  .catch((error)=>console.log(error))
});

router.get("/relatorios", (req,res,next) => {
  res.render("relatorios",{title : 'relatorios'});
});

router.get("/BuscarChamados", (req,res,next)=>{;
  osModel.all()
  .then((data) => { console.log(typeof(data)); return data })
  .then((data) => res.render("chamados",{title : 'Consultar Chamados' , data : data}))
})

router.get("/ocorrencias/:id",(req,res,next) => {

  ocorrenciaModel.find(req.params.id)
  .then((data) => {res.json(data);})
  .catch((error) => console.log(error))
})

module.exports = router;