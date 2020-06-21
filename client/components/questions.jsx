import React from 'react';
import Answers from './answers';
import { connect } from 'react-redux';
import { resetAnswerStatusArray } from '../reduxActions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyAnswer: '',
      answerAlert: '',
      questionIndex: 0,
      status: 'Next',
      answer: []
    };
  }

  checkEmptyAnswer() {
    if (this.props.answerStatus.length === 0) {
      this.setState({ answerAlert: '*** Please answer the question, before going to next one. ***' });
    } else {
      var { dispatch } = this.props;
      dispatch(resetAnswerStatusArray());
      this.setState({ answerAlert: '' });
      document.getElementById('answers').reset();
      this.nextQuestion();
    }
  }

  nextQuestion() {
    if (this.state.questionIndex < this.props.content.length - 1) {
      let increase = this.state.questionIndex;
      ++increase;
      this.setState({ questionIndex: increase });
    } else {
      this.setState({ status: 'Submit' });
    }
  }

  render() {
    // console.log(this.props.content[this.state.questionIndex]);
    // console.log(this.props.answerStatus);
    return (
      <div className="col-5">
        <form id="answers" className="border mt-5 ml-auto">
          {this.props.content[this.state.questionIndex].Question}
          <br/>
          {this.props.content[this.state.questionIndex].array_agg.map((object, indexArray) => <Answers key={indexArray} content={object} questionIndex={this.state.questionIndex}arrayAnswers={this.props.content[this.state.questionIndex].array_agg} />)}
          <button type="button" className="btn btn-info" onClick={this.checkEmptyAnswer.bind(this)}>{this.state.status}</button>
        </form>
        <div className="text-danger">
          {this.state.answerAlert}
        </div>
      </div>
    );
  }
}

export default connect(function (state) {
  return { answerStatus: state.answerStatus };
})(Question);
