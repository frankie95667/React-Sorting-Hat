import React from "react";
import sortingHat from "../images/sorting-hat.png";
import questions from '../questions';
import QuestionForm from './QuestionForm';
import Winner from './Winner';

const Welcome = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={sortingHat} className="App-logo" alt="logo" />
        {!props.start 
        ? 
            <div>
                <h4>Welcome to Hogwarts. Click the button below to start the sorting process.</h4>
            <button onClick={props.startQuestions}>Start Sorting</button>
            </div>
        :
            <>
            {props.index < 6 
                ?
                <QuestionForm 
                    addPoint={props.addPoint}
                    questions={questions} 
                    index={props.index} 
                    nextQuestion={props.nextQuestion} />
                :
                <Winner winner={props.winner} />
            }
            </>
        }
      </header>
    </div>
  );
};

export default Welcome;
