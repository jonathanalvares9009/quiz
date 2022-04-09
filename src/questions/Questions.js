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
  const { index, setIndex, category, setRefresh } = useContext(QuizContext);

  const { isLoading, data, refetch } = useQuery("repoData", () =>
    fetch(`${baseUrl}?categories=${category}&limit=${limit}`).then((res) => {
      setIndex(0);
      setRefresh(true);
      return res.json();
    })
  );

  useEffect(() => {
    refetch();
  }, [category]);

  if (isLoading) return <p>Loading...</p>;

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
