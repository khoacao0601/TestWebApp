import React from 'react';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
      answerIndex: 0
    };
    this.loadAnswer = this.loadAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({ answerArray: this.props.content[this.props.questionIndex].array_agg });
  }

  loadAnswer() {
    return (
      <div>
        <input type="checkbox" name="vehicle1" value={this.props.content}/>
        <label htmlFor={this.props.content}>{this.props.content}</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.loadAnswer()}
        </form>
      </div>
    );
  }

}
