import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
let persistor = persistStore(store)
export {store, persistor}



// const store = createStore(
//   rootReducer,
  
// );

sagaMiddleware.run(rootSaga);

// export default store;