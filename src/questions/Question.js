const styles = {
  width: "90vw",
  height: "70vh",
  margin: "5vw",
};

function Question(props) {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-8"
      style={styles}
    >
      <div className="question mt-5 ml-3 mr-3">{props.question}</div>
      {props.answers.map((answer) => (
        <div
          className="rounded hover:rounded-lg border-8 text-center logo mt-5 ml-3 mr-3"
          key={answer}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}

export default Question;
