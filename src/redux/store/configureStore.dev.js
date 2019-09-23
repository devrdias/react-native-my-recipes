import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  blacklist: [],
};

export default function configureStore(rootReducer, rootSaga) {
  const middleware = [logger];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
  // persistor.purge();

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return { store, persistor };
}
