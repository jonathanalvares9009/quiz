import "../index.css";
import { useQuery } from "react-query";

import Question from "./Question";

const styles = {
  width: "90vw",
  margin: "5vw",
};

const baseUrl = "https://the-trivia-api.com/questions";
const limit = 10;

function Questions() {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch(`${baseUrl}?limit=${limit}`).then((res) => {
      return res.json();
    })
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="questions" style={styles}>
      <Question data={data} />
    </div>
  );
}

export default Questions;
