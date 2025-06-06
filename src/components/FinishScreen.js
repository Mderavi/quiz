function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p>
      you scored <storng>{points}</storng> out of {maxPossiblePoints}(
      {Math.ceil(percentage)})
    </p>
  );
}

export default FinishScreen;
