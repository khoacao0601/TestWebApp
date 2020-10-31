var questionsAmount = (state = '', action) => {
  switch (action.type) {
    case 'amount':
      /* eslint-disable */
      return state = action.item;
    default:
      return state;
  }
};
0123456789
module.exports = questionsAmount;
