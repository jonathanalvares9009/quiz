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
    console.log("Answer");
    if (hasAnswered.has(k))
      setHasAnswered(hasAnswered.set(k, { ...hasAnswered.get(k), ...v }));
    else setHasAnswered(hasAnswered.set(k, v));
  };

  const checkCorrectAns = (answer) => {
    if (
      hasAnswered.has(props.index) &&
      hasAnswered.get(props.index)["answered"] &&
      answer === props.correctAnswer
    ) {
      return true;
    } else if (
      hasAnswered.has(props.index) &&
      hasAnswered.get(props.index)["selectedAnswer"] === answer &&
      hasAnswered.get(props.index)["answered"] &&
      hasAnswered.get(props.index)["correct"] === 1
    ) {
      return true;
    } else if (correct === 1) {
      return true;
    }
    return false;
  };

  const checkWrongAns = (answer) => {
    if (
      hasAnswered.has(props.index) &&
      hasAnswered.get(props.index)["selectedAnswer"] === answer &&
      hasAnswered.get(props.index)["answered"] &&
      hasAnswered.get(props.index)["correct"] === -1
    ) {
      return true;
    } else if (correct === -1) {
      return true;
    }
    return false;
  };

  const onAnswer = (answer) => {
    console.log("onAnswer");
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
        checkCorrectAns(props.answer) ? "bg-green-700" : ""
      } ${checkWrongAns(props.answer) ? "bg-red-700" : ""}`}
      key={props.answer}
      onClick={() => {
        if (
          selected === 0 &&
          hasAnswered.get(props.index)["answered"] === undefined
        ) {
          onAnswer(props.answer);
        }
      }}
    >
      {props.answer}
    </div>
  );
}

export default Answer;
