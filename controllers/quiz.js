const Sequelize = require('sequelize');
const {models} = require('../models');

// Cargar un quiz
exports.load = (req, res, next, quizId) => {
    models.quiz.findById(quizId)
    .then((quiz) => {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            throw new Error(`No existe el quiz con id:${quizId}`);
        }
    })
    .catch(error => next(error));
};

// GET /quizzes
exports.index = (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        console.log(quizzes);
        res.render('quizzes/index.ejs', {quizzes});
    })
    .catch(error => next(error));
};