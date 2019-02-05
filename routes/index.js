var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/chamados', (req,res,next) => {
  res.render('criarChamado', {title : 'Criar Chamado'});
});

router.get("/consultarChamados", (req,res,next) => {
  res.render("consultarChamados",{title : 'Consultar Chamados'});
})

module.exports = router;
