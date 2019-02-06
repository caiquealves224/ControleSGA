var express = require('express');
var router = express.Router();

/* GET home page. */
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
})


module.exports = router;
