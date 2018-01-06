import React from 'react';
import WithKeyboardActions from './WithKeyboardActions';
import reactCSS from 'reactcss';

const style = () =>
  reactCSS({
    default: {
      textArea: {
        boxStyling: 'border-box',
        width: 510,
        height: 80,
        fontSize: 16,
      },
    },
  });

const TextArea = ({placeholder}) => (
  <WithKeyboardActions
    render={({takeKeyboard, releaseKeyboard}) => (
      <textarea
        style={style().textArea}
        onFocus={takeKeyboard}
        onBlur={releaseKeyboard}
        placeholder={placeholder}
      />
    )}
  />
);

export default TextArea;
