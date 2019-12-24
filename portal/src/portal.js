import * as singleSpa from "single-spa";
import modules from "./config";
import { GlobalEventDistributor } from "./globalEventDistributor";
import { loadApp } from "./helper";

const init = async () => {
  const globalEventDistributor = new GlobalEventDistributor();
  const loadingPromises = modules.map(module =>
    loadApp(
      module.name,
      module.path,
      module.entry,
      module.store,
      module.isGlobalEventDistributor ? globalEventDistributor : null
    )
  );
  await Promise.all(loadingPromises);
  singleSpa.start();
};
init();
