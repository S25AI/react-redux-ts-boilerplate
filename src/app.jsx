import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { EnchancedRootContainer } from './containers/RootContainer';
import configureStore from './store';
import './style.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(EnchancedRootContainer);

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    render(EnchancedRootContainer);
  });
}
