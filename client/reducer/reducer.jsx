var redux = require('redux');
var answerStatus = require('./answerReducer');
var changeDirection = require('./changeDirection');
var questionsAmount = require('./questionAmount');

var reducer = redux.combineReducers({
  answerStatus: answerStatus,
  changeDirection: changeDirection,
  questionsAmount: questionsAmount
});

module.exports = reducer;
