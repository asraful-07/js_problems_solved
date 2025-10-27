function mindGame(RoadNumber) {
  if (typeof RoadNumber !== "number") {
    return "value should be number";
  }
  const multiply = RoadNumber * 3;
  const addition = multiply + 10;
  const divide = addition / 2;
  const subtractResult = divide - 5;
  return subtractResult;
}
