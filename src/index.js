const express = require("express");
const app = express();

app.get("/intro-node", (request, response) => {
  return response.json({ message: "Hellodsd " });
});
app.listen(3333);
