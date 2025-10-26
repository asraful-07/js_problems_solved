function sendNotification(email) {
  if (typeof email !== "string" || !email.includes("@")) {
    return "Invalid Email";
  }
  let [username, domain] = email.split("@");
  return `${username} sent you an email from ${domain}`;
}

const email = sendNotification("zihad@gmail.com");
console.log(email);
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
