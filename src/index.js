import cors from "cors";
import mysqlService from "services/mysqlService";
import AdvnacedServer from "config/lib/AdvancedServer";
import { PORT } from "config/envs";

// import { PORT } from "./config/envs";
// import AdvancedServer from "@lib/AdvancedServer/AdvancedServer";
// import mongooseService from "services/mongoose.service";
// import HTTPError from "utils/HTTPError";

async function main() {
  await mysqlService.connect();
  const server = new AdvnacedServer({
    port: PORT,
  });

  server.folderRouter();

  // let result = await mysqlService.test();
  // console.log(result);
  // console.log("all good");
}

main();
