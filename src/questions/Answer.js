import { useState, useContext } from "react";
import CategoryContext from "../quizContext";

function Answer(props) {
  const { selected, setSelected, correct, setCorrect } =
    useContext(CategoryContext);

  const onAnswer = (answer) => {
    if (answer === props.correctAnswer) {
      setCorrect(1);
    } else {
      setCorrect(-1);
    }
    setSelected(1);
  };

  return (
    <div
      className={`rounded hover:rounded-lg hover:bg-green-500/50 border-8 text-center logo mb-5 ml-3 mr-3 ${
        correct == 1 ? "bg-green-700" : ""
      } ${correct == -1 ? "bg-red-700" : ""}`}
      key={props.answer}
      onClick={() => {
        if (selected == 0) onAnswer(props.answer);
      }}
    >
      {props.answer}
    </div>
  );
}

export default Answer;
