const app = require("./src/server.js");
const PORT = process.env.PORT || 3000;
const dbconnect = require("./src/config/database");

dbconnect()
  .then(() => {
    try {
      app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (err) {
      console.log(err);
    }
  })
  .catch((error) => console.log(error));
