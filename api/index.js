const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const saveGenres = require("./src/utils/saveGenresToDB.js");

conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    try {
      await saveGenres();
    } catch (error) {
      console.log(error);
    }
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
