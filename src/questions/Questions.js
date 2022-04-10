import "../index.css";
import { useQuery } from "react-query";
import { useContext, useEffect } from "react";

import Question from "./Question";
import QuizContext from "../quizContext";

const styles = {
  width: "90vw",
  margin: "5vw",
};

const baseUrl = "https://the-trivia-api.com/questions";
const limit = 10;

function Questions() {
  const {
    index,
    setIndex,
    category,

    setRefresh,
    setScore,

    setShowModal,
    playAgain,
    setPlayAgain,
  } = useContext(QuizContext);

  const { isLoading, data, refetch } = useQuery("repoData", () =>
    fetch(`${baseUrl}?categories=${category}&limit=${limit}`).then((res) => {
      setShowModal(false);
      setIndex(0);
      setScore(0);
      setRefresh(true);
      setShowModal(false);

      return res.json();
    })
  );

  useEffect(() => {
    console.log("playAgain", playAgain);
    setPlayAgain(false);
    setShowModal(false);
    refetch();
  }, [category, playAgain]);

  if (isLoading)
    return (
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="questions" style={styles}>
      <Question
        question={data[index].question}
        correctAnswer={data[index].correctAnswer}
        incorrectAnswers={data[index].incorrectAnswers}
        length={data.length}
      />
    </div>
  );
}

export default Questions;
