function sendNotification(email) {
  if (!email.includes("@") || typeof email !== "string") {
    return "Invalid Email";
  }

  let parts = email.split("@");
  const result = parts[0] + " sent you an email from " + parts[1];
  return result;
}

const email = sendNotification("zihad@gmail.com");
console.log(email);
