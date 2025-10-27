function isLGSeven(passCode) {
  const subtract = passCode - 7;
  if (typeof passCode !== "number") {
    return "value should be numbers";
  } else if (subtract >= 7) {
    const multiplyResult = passCode * 2;
    return multiplyResult;
  } else {
    return subtract;
  }
}
