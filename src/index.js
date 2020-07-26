import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// step 1 : import redux for the create store method
import { createStore } from 'redux';

// step 3 : import Provider from the react redux
import { Provider } from 'react-redux';

// step 2 : import Reducer for the state and action
import Reducer from './Reducers/Reducer';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
