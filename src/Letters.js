import Letter from './Letter';
import React from 'react';

const style = {
  boxStyling: 'border-box',
  width: 520,
  textAlign: 'center',
  margin: '0 auto',
};

const Letters = () => (
  <div>
    <p>
      Clicking anywhere outside the input fields to blur focus from the input
      fields will allow keyboard commands to be registered again on this
      keyboard.
    </p>
    <div style={style}>
      <div>
        <Letter letter="q" />
        <Letter letter="w" />
        <Letter letter="e" />
        <Letter letter="r" />
        <Letter letter="t" />
        <Letter letter="y" />
        <Letter letter="u" />
        <Letter letter="i" />
        <Letter letter="o" />
        <Letter letter="p" />
      </div>
      <div>
        <Letter letter="a" />
        <Letter letter="s" />
        <Letter letter="d" />
        <Letter letter="f" />
        <Letter letter="g" />
        <Letter letter="h" />
        <Letter letter="j" />
        <Letter letter="k" />
        <Letter letter="l" />
      </div>
      <div>
        <Letter letter="z" />
        <Letter letter="x" />
        <Letter letter="c" />
        <Letter letter="v" />
        <Letter letter="b" />
        <Letter letter="n" />
        <Letter letter="m" />
      </div>
    </div>
  </div>
);

export default Letters;
