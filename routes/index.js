var express = require('express');
var router = express.Router();
const db = require("../db");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ControleSGA'});
});

router.get('/chamados', (req,res,next) => {
  res.render('criarChamado', {title : 'Criar Chamado'});
});

router.get("/consultarChamados", (req,res,next) => {
  res.render("consultarChamados",{title : 'Consultar Chamados'});
})

router.get("/relatorios", (req,res,next) => {
  res.render("relatorios",{title : 'relatorios'});
});

router.get("/ocorrencias",(req,res,next) => {
  
  let itens = { itens: [
    {id: 1, mensagem : "qualquer coisa"},
    {id: 2, mensagem : "dois"}
  ]}

  res.json(itens);
})


module.exports = router;