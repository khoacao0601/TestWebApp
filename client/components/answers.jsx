import React from 'react';
import { connect } from 'react-redux';
import { checkEmptyAnswer, checkEmptyAnswerMinus } from '../reduxActions';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
      answerIndex: 0,
      answer: false
    };
    this.rendAnswer = this.rendAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({ answerArray: this.props.content[this.props.questionIndex].array_agg });
  }

  checkConditionforEmptyAnswer() {
    var { dispatch } = this.props;
    var x = this.props.arrayAnswers.indexOf(this.props.content);
    var index = this.props.answerStatus.indexOf(x);

    var checkPoint = this.props.answerStatus.filter(function (number) {
      return number === x;
    });

    if (checkPoint.length === 0) {
      this.dispatchCheckEmpty(x);
    } else {
      dispatch(checkEmptyAnswerMinus(index));
    }
  }

  dispatchCheckEmpty(value) {
    var { dispatch } = this.props;
    dispatch(checkEmptyAnswer(value));
  }

  rendAnswer() {
    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" onClick={this.checkConditionforEmptyAnswer.bind(this)}/>
        <label className="form-check-label" htmlFor={this.props.content}>{this.props.content}</label>
        <br/>
      </div>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        {this.rendAnswer()}
      </React.Fragment>
    );
  }

}

export default connect(function (state) {
  return { answerStatus: state.answerStatus };
})(Answers);
