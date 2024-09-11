const users = [
    { username: "john_doe", domain: "example.com" },
    { username: "jane_smith", domain: "anotherdomain.com" },
    { username: "bob_jones", domain: "yetanotherdomain.com" }
];

const messages = [];

for (const user of users) {
    const { username, domain } = user;
    const message = `${username} sent you an email from ${domain}`;
    messages.push(message);
}

console.log(messages);

