import React from 'react';
import WithKeyboardActions from './WithKeyboardActions';
import reactCSS from 'reactcss';

const style = () =>
  reactCSS({
    default: {
      input: {
        boxStyling: 'border-box',
        width: 510,
        fontSize: 16,
      },
    },
  });

const Input = ({placeholder}) => (
  <WithKeyboardActions
    render={({takeKeyboard, releaseKeyboard}) => (
      <input
        style={style().input}
        onFocus={takeKeyboard}
        onBlur={releaseKeyboard}
        placeholder={placeholder}
      />
    )}
  />
);

export default Input;
