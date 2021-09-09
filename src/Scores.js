import React from 'react' 

const Scores = (props) => {

return (

    <div className="scoresDiv">

            <p><span className="spanStyle">Got a score of: </span> {props.studentScores}</p>
            <p><span className="spanStyle">Date: </span> {props.studentDate}</p>


    </div>


)




}

export default Scores;