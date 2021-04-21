import React from 'react';
import Question from './questions';
import QuestionAmount from './questionAmount';
import { connect } from 'react-redux';
import NavBar from './navbar';
import Footer from './footer';
012345
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: []
    };
    this.checkEmpty = this.checkEmpty.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
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
        <React.Fragment>
          <Question content={this.state.question.slice(0, this.props.questionAmount)}/>
        </React.Fragment>
      );
    }
  }

  changeDirection() {
    if (this.props.direction === 'amountQuestion') {
      return (
        <QuestionAmount></QuestionAmount>
      );
    }

    if (this.props.direction === 'questionList') {
      return (
        <React.Fragment>
          {this.checkEmpty()}
        </React.Fragment>
      );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <NavBar/>
        {this.changeDirection()}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default connect(function (state) {
  return {
    direction: state.changeDirection,
    questionAmount: state.questionsAmount
  };
})(App);
