import React, {Component} from 'react';
import Welcome from './components/Welcome';
import questions from './questions';

import './App.css';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      points: [
        {
          points: 0,
          name: 'Hufflepuff',
          uniqueFacts: [
            'instituted by Helga Hufflepuff',
            'dedicated,',
            'hard working,',
            'loyal'
          ],
          colors: [
            'yellow',
            'black'
          ],
          famousPerson: 'Newt Scamander',
        },
        {
          points: 0,
          name: 'Ravenclaw',
          uniqueFacts: [
            'instituted by Rowena Ravenclaw',
            'intelligent,',
            'witty',
          ],
          colors: [
            'blue',
            '#cd7f32'
          ],
          famousPerson: 'Gilderoy Lockheart'
        },
        {
          points: 0,
          name: 'Slytherin',
          uniqueFacts: [
            'instituted by Salazar Slytherin',
            'cunning,',
            'ambitious,',
            'resourceful,'
          ],
          colors: [
            '#50c878',
            '#c0c0c0'
          ],
          famousPerson: 'Lord Voldemort'
        },
        {
          points: 0,
          name: 'Gryfindor',
          uniqueFacts: [
            'instituted by Godric Gryffindor',
            'brave,',
            'daring,',
            'chivalrous'
          ],
          colors: [
            '#ff2400',
            '#ffd700'
          ],
          famousPerson: 'Harry Potter and Albus Dumbledore'
        }
      ],
      qIndex: 0,
      winner: null,
      start: false,
    }
  }

  startQuestions = () => {
    this.setState({
      start: true
    })
  }

  addPoint = (id) => {
    let ID = Number(id) - 1;
    const newPoints = [
      ...this.state.points
    ]
    newPoints[ID].points++;
    this.setState({
      points: newPoints
    });
  }

  nextQuestion = () => {
    console.log(this.state.qIndex, questions.length);
    if(this.state.qIndex < questions.length - 1){
      this.setState(prevState => ({
        qIndex: prevState.qIndex + 1
      }))
    } else {
      console.log(this.state.qIndex);
      const winner = this.state.points.reduce((max, obj) => max.points > obj.points ? max : obj);
      console.log(winner);
      this.setState(prevState => ({
        winner,
        qIndex: prevState.qIndex + 1 
      }));
    }
   
  }

  render(){
    return (
    <>
      <Welcome
      startQuestions={this.startQuestions}
      start={this.state.start}
      addPoint={this.addPoint}
      nextQuestion={this.nextQuestion}
      index={this.state.qIndex}
      winner={this.state.winner} />
    </>
  );
  }
}
