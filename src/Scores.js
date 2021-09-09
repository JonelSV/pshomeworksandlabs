import React from 'react' 

const Scores = (props) => {

return (

    <div className="scoresDiv">

            <p>{props.studentScores}</p>
            <p>{props.studentDate}</p>


    </div>


)




}

export default Scores;