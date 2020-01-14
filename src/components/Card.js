import React  from 'react';

const Card = (props) => {

  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="question">{props.question}</div>
        </div>
        <div className="back">
          <div className="answer-container">
          {props.answers.map((answer) => (
            <div className="answer">{answer}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
