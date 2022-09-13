import React from "react";
import data from "./quiz-data";
import Animation from "./animation";
import CelebrationAnimation from "./celebration-animation";


export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [status, setStatus] = React.useState(false);
    const [countCorrectAns, setCountCorrectAns] = React.useState(0);


    function HandleButton(e, index) {
        e.preventDefault();
        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setStatus(true);
            console.log("Successfully completed the quitz!");
        }
        console.log(index);
        console.log(data[currentQuestion].options[index].isCorrect);
        if (data[currentQuestion].options[index].isCorrect === true) {
            setCountCorrectAns(countCorrectAns + 1);
        }
    }

    console.log(countCorrectAns);


    return (
        <div className="quitz-container">
            {status ? <div className="result-div">
                <p>You have uccessfully completed the quitz!</p>
                <p>You scored {countCorrectAns} out of {data.length}. </p>
            </div> :
                <div className="parent-div">
                    <div className="part-one">
                        <p className="question-title">Qustion {currentQuestion + 1}/{data.length}</p>
                        <p className="question-text"><span>{currentQuestion + 1}.  </span>   {data[currentQuestion]?.question}</p>
                    </div>
                    <div className="part-two">
                        {data[currentQuestion].options.map((obj, index) =>
                            <button onClick={(e) => HandleButton(e, index)} key={index}
                            >{obj.answer}</button>)}
                    </div>
                </div>}
                <Animation />
                
                {status&&<CelebrationAnimation />}
        </div>
    )
}