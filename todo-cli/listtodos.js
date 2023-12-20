//  listtodos.js
const db = require("./models/index");

const listtodo = async () => {
  try {
    await db.todo.showList();
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await listtodo();
})();
