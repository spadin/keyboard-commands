import reducers from './ducks';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {setupKeyboardCommands} from './ducks/keyboard';

export const newStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  setupKeyboardCommands(store);

  return store;
};
