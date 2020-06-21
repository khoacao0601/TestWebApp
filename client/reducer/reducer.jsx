var redux = require('redux');
var answerStatus = require('./answerReducer');

var reducer = redux.combineReducers({
  answerStatus: answerStatus
});

module.exports = reducer;
