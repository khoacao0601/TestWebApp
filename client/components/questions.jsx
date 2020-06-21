import React from 'react';
import Answers from './answers';
import { connect } from 'react-redux';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyAnswer: '',
      answerSatus: 'Please answer the question!',
      questionIndex: 0,
      status: 'Next',
      answer: []
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    // console.log(this.props.content);
    if (this.state.questionIndex < this.props.content.length - 1) {
      document.getElementById('answers').reset();
      let increase = this.state.questionIndex;
      ++increase;
      this.setState({ questionIndex: increase });
    } else {
      this.setState({ status: 'Submit' });
    }
  }

  render() {
    // console.log(this.props.content[this.state.questionIndex]);
    return (
      <div className="col-5">
        <form id="answers" className="border mt-5 ml-auto">
          {this.props.content[this.state.questionIndex].Question}
          <br/>
          {this.props.content[this.state.questionIndex].array_agg.map((object, indexArray) => <Answers key={indexArray} content={object} questionIndex={this.state.questionIndex}/>)}
          <button type="button" className="btn btn-info" onClick={this.nextQuestion}>{this.state.status}</button>
        </form>
      </div>
    );
  }
}

export default connect(function (state) {
  return { answerStatus: state.answerStatus };
})(Question);
