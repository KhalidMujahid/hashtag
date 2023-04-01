const app = require("./src/server.js");
const PORT = process.env.PORT || 3000;
const dbconnect = require("./config/database");

dbconnect()
  .then(() => {
    try {
      app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));
