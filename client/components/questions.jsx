import React from 'react';
import Answers from './answers';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      status: 'Next',
      answer: []
    };
    this.nextQuestion = this.nextQuestion.bind(this);
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
    return (
      <div>
        {this.props.content[this.state.questionIndex].Question}
        {this.props.content[this.state.questionIndex].array_agg.map((object, indexArray) => <Answers key={indexArray} content={object} questionIndex={this.state.questionIndex}/>)}
        <button type="button" className="btn btn-info" onClick={this.nextQuestion}>{this.state.status}</button>
      </div>
    );
  }
}
