const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const {models} = require('../models');

router.get('/', function(req,res,next) {
  res.render('index', {title : 'Quiz'});
});
router.get('/credits', function(req, res, next){
  res.render('credits', {title: 'Mario Arroyo'});
});
router.get('/quizzes', function(req, res, next){
  models.quiz.findAll()
      .then(quizzes => {
        res.render('quizzes', {quizzes});
    })
    .catch(error => next(error))
});

module.exports = router;


