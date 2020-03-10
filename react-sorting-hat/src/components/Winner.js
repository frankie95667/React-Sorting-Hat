import React from 'react';

const Winner = (props) => {
    return (
        <div>
            <h2 style={{color: props.winner.colors[0]}}>You will be...{props.winner.name}</h2>
            <p style={{color: props.winner.colors[1]}}>{`${props.winner.name} was ${props.winner.uniqueFacts[0]}. You are ${props.winner.uniqueFacts.map((fact, i) => {
                if(i > 0){
                    return fact;
                }
            })}.`}</p>
            <p style={{color: props.winner.colors[1]}}>The person/people most famous in your clan is {props.winner.famousPerson}</p>
        </div>
    )
}

export default Winner;