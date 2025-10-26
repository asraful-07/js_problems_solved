const person_A = {
  name: "Bean",
  ssc: 40,
  hsc: 30,
  B_S: true,
};

const person_B = {
  name: "Team",
  ssc: 40,
  hsc: 40,
  B_S: false,
};

function job(info) {
  if (typeof info !== "object") {
    return;
  }

  let select = info.ssc + info.hsc;

  if (info.B_S) {
    select = select + select * 0.2;
  }
  console.log(select);

  if (select >= 80) {
    return "your select";
  } else {
    return "next time";
  }
}

console.log(job(person_A));
console.log(job(person_B));
