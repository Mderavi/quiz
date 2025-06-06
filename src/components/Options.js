function options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="option">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option 
            ${index === answer ? "answer" : ""} 
            ${
              hasAnswerd
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          key={option}
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default options;
