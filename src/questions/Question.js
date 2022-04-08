import { useState, useEffect, useContext } from "react";

import shuffleArray from "../utilities/shuffle.js";
import Answer from "./Answer.js";
import CategoryContext from "../quizContext.js";

function Question(props) {
  const [answers, setAnswer] = useState([]);
  const { selected, setSelected, setCorrect, index, setIndex } =
    useContext(CategoryContext);

  useEffect(() => {
    setIndex(index + 1);
    let answerArray = [];
    answerArray = answerArray.concat(props.data[index].correctAnswer);
    answerArray = answerArray.concat(props.data[index].incorrectAnswers);
    answerArray = shuffleArray(answerArray);
    setAnswer(answerArray);
    setSelected(0);
    setCorrect(0);
  }, [selected]);

  useEffect(() => {
    let answerArray = [];
    answerArray = answerArray.concat(props.data[index].correctAnswer);
    answerArray = answerArray.concat(props.data[index].incorrectAnswers);
    answerArray = shuffleArray(answerArray);
    setAnswer(answerArray);
  }, [index]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-8 relative">
      <div className="question mt-5 mb-5 ml-3 mr-3">
        {props.data[index].question}
      </div>
      {answers.map((answer) => (
        <Answer
          answer={answer}
          correctAnswer={props.data[index].correctAnswer}
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
            }
          }}
        >
          Previous
        </button>
        {index}
        <button
          className={`bg-sky-500/50 ${
            index !== props.data.length - 1 ? "hover:bg-green-500/50" : ""
          } ml-5 mb-5 logo mr-5 rounded-lg w-1/2`}
          onClick={() => {
            if (index < props.data.length - 1) {
              setIndex(index + 1);
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
