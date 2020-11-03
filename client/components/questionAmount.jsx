import React from 'react';
import { connect } from 'react-redux';
import { questionsAmount, changeDirectionToQuestionList } from '../reduxActions';

class QuestionAmount extends React.Component {
  constructor(porps) {
    super(porps);
    this.input = React.createRef();
    this.state = {

    };
    this.handleChangeView = this.handleChangeView.bind(this);
  }
  0123456789

  handleChange2() {
    var x = 2;
    var { dispatch } = this.props;
    dispatch(questionsAmount(x));
    this.handleChangeView();
  }

  handleChange5() {
    var x = 5;
    var { dispatch } = this.props;
    dispatch(questionsAmount(x));
    this.handleChangeView();
  }

  handleChange8() {
    var x = 8;
    var { dispatch } = this.props;
    dispatch(questionsAmount(x));
    this.handleChangeView();
  }

  handleChangeView() {
    var { dispatch } = this.props;
    dispatch(changeDirectionToQuestionList('questionList'));
  }

  render() {
    return (
      <div>
        <p>How many questions you want to test?</p>
        <button type="button" className="ml-2 btn btn-primary" onClick={this.handleChange2.bind(this)}>2 questions</button>
        <button type="button" id='btn5' className="ml-2 btn btn-success" onClick={this.handleChange5.bind(this)}>5 questions</button>
        <button type="button" id='btn8' className="ml-2 btn btn-dark" onClick={this.handleChange8.bind(this)}>8 questions</button>
      </div>
    );
  }
}

export default connect(function (state) {
  return {
    amount: state.questionsAmount,
    view: state.changeDirection
  };
})(QuestionAmount);
