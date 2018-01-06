const KEY_DOWN = 'key-down';
const KEY_UP = 'key-up';
const RELEASE_KEYBOARD = 'release-keyboard';
const TAKE_KEYBOARD = 'take-keyboard';

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const takeKeyboard = () => ({
  type: TAKE_KEYBOARD,
});

export const releaseKeyboard = () => ({
  type: RELEASE_KEYBOARD,
});

const keyListener = (eventName, key, action) => (dispatch, getState) => {
  const handler = ({key: pressedKey}) => {
    const {keyboard: {available}} = getState();
    if (key === pressedKey && available) {
      dispatch(action);
    }
  };

  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
};

const keyDown = (key) => ({type: KEY_DOWN, key});
const keyUp = (key) => ({type: KEY_UP, key});

const keyDownListener = (key, action) => keyListener('keydown', key, action);
const keyUpListener = (key, action) => keyListener('keyup', key, action);

export const setupKeyboardCommands = (store) => {
  letters.forEach((key) => {
    store.dispatch(keyDownListener(key, keyDown(key)));
    store.dispatch(keyUpListener(key, keyUp(key)));
  });

  return store;
};

const defaultStore = {
  available: true,
  pressedKeys: {},
};

export const reducer = (store = defaultStore, action) => {
  switch (action.type) {
    case TAKE_KEYBOARD:
      return {
        ...store,
        available: false,
      };
    case RELEASE_KEYBOARD:
      return {
        ...store,
        available: true,
      };
    case KEY_DOWN: {
      return {
        ...store,
        pressedKeys: {
          ...store.pressedKeys,
          [action.key]: true,
        },
      };
    }
    case KEY_UP: {
      return {
        ...store,
        pressedKeys: {
          ...store.pressedKeys,
          [action.key]: false,
        },
      };
    }
    default:
      return store;
  }
};
