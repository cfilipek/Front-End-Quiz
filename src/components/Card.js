import React  from 'react';

const forLoop = () => {
  let divs=[];
  let margin= 22;
  for(let i=0; i<= 13; i++){
   divs.push(<div className="line" style={{marginTop: `${margin}px`}}></div>)
  }
  return divs
}

const Card = (props) => {
  console.log(props.color)

  return (
    <div className="card-container">
      <div className="card">
        <div className="front" style={{ backgroundColor: props.color}}>
          <div className="question">{props.question}</div>
        </div>
        <div className="back">
          <div className="answer-container">
            <div style={{position:"absolute", paddingRight:"40px"}}>
          {props.answers.map((answer) => (
            <div className="answer">{answer}</div>
          ))}
          </div>
            <div>
            {forLoop().map((div) =>
            (div))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
