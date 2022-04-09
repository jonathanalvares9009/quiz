import { useState, useContext, useEffect } from "react";
import CategoryContext from "../quizContext";

function Answer(props) {
  const [correct, setCorrect] = useState(0);
  const {
    selected,
    setSelected,
    setIndexChanged,
    hasAnswered,
    setHasAnswered,
  } = useContext(CategoryContext);

  const updateMap = (k, v) => {
    setHasAnswered(hasAnswered.set(k, v));
  };

  const onAnswer = (answer) => {
    let userHasAnswered = {
      answered: true,
      selectedAnswer: props.answer,
    };
    if (answer === props.correctAnswer) {
      setCorrect(1);
      userHasAnswered["correct"] = 1;
    } else {
      setCorrect(-1);
      userHasAnswered["correct"] = -1;
    }
    setSelected(1);
    setIndexChanged(0);
    updateMap(props.index, userHasAnswered);
    console.log(hasAnswered);
  };

  useEffect(() => {
    setIndexChanged(0);
  }, [selected]);

  return (
    <div
      className={`rounded hover:rounded-lg border-8 text-center logo mb-5 ml-3 mr-3 ${
        correct === 1 ||
        (hasAnswered.has(props.index) &&
          hasAnswered.get(props.index)["selectedAnswer"] === props.answer &&
          hasAnswered.get(props.index)["answered"] &&
          hasAnswered.get(props.index)["correct"] === 1)
          ? "bg-green-700"
          : ""
      } ${
        correct === -1 ||
        (hasAnswered.has(props.index) &&
          hasAnswered.get(props.index)["selectedAnswer"] === props.answer &&
          hasAnswered.get(props.index)["answered"] &&
          hasAnswered.get(props.index)["correct"] === -1)
          ? "bg-red-700"
          : ""
      }`}
      key={props.answer}
      onClick={() => {
        if (selected === 0) onAnswer(props.answer);
      }}
    >
      {props.answer}
    </div>
  );
}

export default Answer;
