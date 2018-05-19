var express = require('express');
var router = express.Router();

const controller = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Créditos
router.get('/credits', (req, res, next) =>{
	res.render('credits');
});

//Cargar quizId
router.param('quizId', controller.load);

//Quizzes
router.get('/quizzes', controller.index);
//findAll, etc..

module.exports = router;
