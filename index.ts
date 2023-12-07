import app from "./app";
import { sequelize } from "./database/database";

async function main() {
  await sequelize.sync({force: false});
  app.listen(5000);
}

main();
