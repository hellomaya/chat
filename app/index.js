import React from 'react';
import { Provider } from 'react-redux';

import { ConfigureStore } from './module-redux/';

import Main from './storyboard/main/Container';

const store = ConfigureStore();

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
