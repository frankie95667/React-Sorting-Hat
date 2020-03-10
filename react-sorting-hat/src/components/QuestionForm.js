import React, { Component } from "react";

export default class QuestionForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.choice.forEach(choice => {
        if(choice.checked){
            this.props.addPoint(choice.id);
        }
    })
    this.props.nextQuestion();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.props.questions[this.props.index].question}</p>
        {this.props.questions[this.props.index].choices.map(choice => {
          return (
            <div style={{ textAlign: "left" }}>
              <input
                type="radio"
                id={choice.id}
                name="choice"
                value={choice.choice}
              />
              <label htmlFor={choice.id}>{choice.choice}</label>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }
}
