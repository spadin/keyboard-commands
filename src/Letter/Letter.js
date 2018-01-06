import React from 'react';
import reactCSS from 'reactcss';

const styles = (selected) =>
  reactCSS(
    {
      default: {
        container: {
          alignItems: 'center',
          border: '1px solid black',
          boxSizing: 'border-box',
          display: 'inline-flex',
          height: 40,
          justifyContent: 'center',
          width: 40,
          margin: 1,
        },
      },
      selected: {
        container: {
          borderColor: 'red',
          color: 'red',
          backgroundColor: '#fff3f3',
        },
      },
    },
    {
      selected,
    }
  );

const Letter = ({letter, selected}) => (
  <div style={styles(selected).container}>
    <h1>{letter}</h1>
  </div>
);

export default Letter;
