import React from 'react';
import Question from './questions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: []
    };
    this.checkEmpty = this.checkEmpty.bind(this);
  }

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => this.setState({ question: data }))
      .catch(error => alert(error));
  }

  checkEmpty() {
    if (this.state.question.length !== 0) {
      return (
        <div>
          <Question content={this.state.question}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.checkEmpty()}
      </div>
    );
  }
}
