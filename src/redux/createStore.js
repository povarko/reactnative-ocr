import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { reactotronConfig } from "@AppConfig";
import Reactotron from "reactotron-react-native";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["auth", "sports", "teams", "athletes"]
};

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  reactotronConfig.createEnhancer()
);

const configStore = preloadedState => {
  let store = createStore(persistedReducer, preloadedState, middlewares);
  let persistor = persistStore(store);

  if (__DEV__) {
    store.subscribe(() => {
      reactotronConfig.log(store.getState());
    });
  }
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configStore;
