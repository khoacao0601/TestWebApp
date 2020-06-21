var answerStatus = (state = [], action) => {
  switch (action.type) {
    case 'addStatus':
      return [...state, action.item];
    default:
      return state;
  }
};

module.exports = answerStatus;
