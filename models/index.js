const path = require('path');

const Sequelize = require('sequelize');

//SQLite
const sequelize = new Sequelize("sqlite:quizzes.sqlite", {logging: false});

const quiz = sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
.then(() => sequelize.models.quiz.count()) //Promesa: miro a ver cuantos quiz hay en models, en la base de datos
.then(count => {	//Esta función toma como parámetro el count anterior. Se crea un "array" con preguntas, asocia question y answer, en nuestra BD
	if (!count) {
		return sequelize.models.quiz.bulkCreate([
			{ question: "Capital de Italia",	answer: "Roma"},
			{ question: "Capital de Francia",	answer: "París"},
			{ question: "Capital de España",	answer: "Madrid"},
			{ question: "Capital de Portugal",	answer: "Lisboa"}
		]);
	}
})
.catch(error => {
	console.log(error);
});

exports.quiz=quiz;
module.exports = sequelize;
//exports.quiz=quiz;