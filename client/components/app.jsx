import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null
    };
  }

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => {
        this.setState({ question: data });
        // eslint-disable-next-line no-console
        console.log(this.state.question[0].content);
      })
      .catch(err => this.setState({ message: err.message }));
  }

  render() {
    return (
      <div>
        <p>Question: </p>
        <div>{this.state.question[0].content}</div>
      </div>
    );
  }
}
