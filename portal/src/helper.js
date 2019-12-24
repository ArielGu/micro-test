import * as singleSpa from "single-spa";

export const hashPrefix = hash => {
  return () => {
    return location.hash.startsWith(`#${hash}`);
  };
};
export const loadApp = async (
  name,
  hash,
  appURL,
  storeURL,
  globalEventDistributor
) => {
  let storeModule = {};
  let customProps = { globalEventDistributor: globalEventDistributor };

  try {
    storeModule = storeURL
      ? await SystemJS.import(storeURL)
      : { storeInstance: null };
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e);
  }

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;

    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    name,
    () => SystemJS.import(appURL),
    hashPrefix(hash),
    customProps
  );
};
