// src/server.js
const app = require("./app");

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Notification microservice is running on port ${PORT}`);
});
