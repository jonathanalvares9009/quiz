function Question(props) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-8 relative">
      <div className="question mt-5 mb-5 ml-3 mr-3">
        {props.data[0].question}
      </div>
      {props.data[0].incorrectAnswers.map((answer) => (
        <div
          className="rounded hover:rounded-lg hover:bg-green-500/50 border-8 text-center logo mb-5 ml-3 mr-3"
          key={answer}
        >
          {answer}
        </div>
      ))}
      {/* center the div */}
      <div className="flex justify-center">
        <button className="bg-sky-500/50 hover:bg-green-500/50 ml-5 mb-5 logo mr-5 rounded-lg w-1/2">
          Previous
        </button>
        <button className="bg-sky-500/50 hover:bg-green-500/50 mr-5 mb-5 logo ml-5 rounded-lg w-1/2">
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
