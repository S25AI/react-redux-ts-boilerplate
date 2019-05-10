import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { EnchancedRootContainer } from './containers/RootContainer';
import configureStore from './store';
import './style.css';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(EnchancedRootContainer);
