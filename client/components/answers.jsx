import React from 'react';
import { connect } from 'react-redux';
import { checkEmptyAnswer } from '../reduxActions';

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

  dispatchCheckEmpty() {
    var x = document.getElementById('sendValue').defaultChecked;
    var { dispatch } = this.props;
    dispatch(checkEmptyAnswer(x));
  }

  rendAnswer() {
    return (
      <div className="form-check">
        <input className="form-check-input" id="sendValue" type="checkbox" onChange={this.dispatchCheckEmpty.bind(this)}/>
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
