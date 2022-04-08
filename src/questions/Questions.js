import "../index.css";
import { useQuery } from "react-query";

import Question from "./Question";

function Questions() {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("https://the-trivia-api.com/questions?limit=5").then((res) => {
      return res.json();
    })
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="questions flex justify-center">
      {/* {data.map((question) => ( */}
      <Question
        key={data[0].id}
        question={data[0].question}
        answers={data[0].incorrectAnswers}
      />
      {/* ))} */}
    </div>
  );
}

export default Questions;
