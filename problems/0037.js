function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
  const friend1Diamond = friend1Gems * 21;
  const friend2Diamond = friend2Gems * 32;
  const friend3Diamond = friend3Gems * 43;
  const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
  if (
    typeof friend1Gems !== "number" ||
    typeof friend2Gems !== "number" ||
    typeof friend3Gems !== "number"
  ) {
    return "both values should be numbers";
  } else if (totalDiamond >= 2000) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}
