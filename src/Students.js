import React from 'react';
import Scores from './Scores';

const Students = (props) => {
    return (
      <div className='studentDiv'>
          <h3>{props.studentDetails.name}</h3>
          <p className='studentBio'>{props.studentDetails.bio}</p>

          {props.studentDetails.scores.map((item, index)=> <Scores studentScores={item.score} studentDate={item.date} key={index} />)}
      </div>
    )
}




export default Students;