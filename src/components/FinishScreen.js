function FinishScreen({ points, maxPossiblePoints, heighscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 100) emoji = "👍";
  if (percentage >= 0 && percentage < 100) emoji = "🤔";
  if (percentage === 0) emoji = "🤦🏻‍♀️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <storng>{points}</storng> out of{" "}
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {heighscore} points )</p>

      <button
        className="btn brn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
