import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppContainer from '~/navigation/';
import SplashScreen from './containers/SplashScreen';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import configureStore from './redux/store/configureStore';

const { store, persistor } = configureStore(rootReducer, rootSaga);

// eslint-disable-next-line no-console
console.disableYellowBox = true; // Debug Only - yellow box


const App = () => (
  <Provider store={store}>
    <PersistGate loading={<SplashScreen />} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App;
