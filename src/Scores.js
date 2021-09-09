import React from 'react' 

const Scores = (props) => {

return (

    <div className="scoresDiv">

            <p>Got a score of: {props.studentScores}</p>
            <p>Date: {props.studentDate}</p>


    </div>


)




}

export default Scores;