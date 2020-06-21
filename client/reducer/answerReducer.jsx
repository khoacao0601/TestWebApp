var answerStatus = (state = [], action) => {
  switch (action.type) {
    case 'addStatus':
      return [...state, action.item];
    case 'remove':
      return state.filter((e, i) => i !== action.index);
    case 'reset':
      return [...state.slice(0, length)];
    default:
      return state;
  }
};

module.exports = answerStatus;
