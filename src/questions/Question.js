import { useState, useEffect, useContext } from "react";

import shuffleArray from "../utilities/shuffle.js";
import Answer from "./Answer.js";
import CategoryContext from "../quizContext.js";

function Question(props) {
  const [answers, setAnswer] = useState([]);
  const { index, setIndex, setIndexChanged, setSelected } =
    useContext(CategoryContext);

  useEffect(() => {
    let answerArray = [];
    answerArray = answerArray.concat(props.correctAnswer);
    answerArray = answerArray.concat(props.incorrectAnswers);
    answerArray = shuffleArray(answerArray);
    setAnswer(answerArray);
    setSelected(0);
  }, [props.question, index]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-8 relative">
      <div className="question mt-5 mb-5 ml-3 mr-3">{props.question}</div>
      {answers.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          correctAnswer={props.correctAnswer}
          index={index}
        />
      ))}
      {/* center the div */}
      <div className="flex justify-center">
        <button
          className={`bg-sky-500/50 ${
            index !== 0 ? "hover:bg-green-500/50" : ""
          } ml-5 mb-5 logo mr-5 rounded-lg w-1/2`}
          disabled={index === 0}
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setIndexChanged(1);
              setSelected(0);
            }
          }}
        >
          Previous
        </button>
        {index + 1}
        <button
          className={`bg-sky-500/50 ${
            index !== props.length - 1 ? "hover:bg-green-500/50" : ""
          } ml-5 mb-5 logo mr-5 rounded-lg w-1/2`}
          onClick={() => {
            if (index < props.length - 1) {
              setIndex(index + 1);
              setIndexChanged(1);
              setSelected(0);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
