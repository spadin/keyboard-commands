import ContactForm from './ContactForm';
import Letters from './Letters';
import React from 'react';
import reactCSS from 'reactcss';

const styles = () =>
  reactCSS({
    default: {
      container: {
        font: '12px sans-serif',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        justifyContent: 'center',
        width: 600,
      },
      instructions: {
        clear: 'both',
      },
      contactForm: {},
      letters: {},
    },
  });

const App = ({lettersSelected, textAreaSelected}) => {
  const style = styles();
  return (
    <div style={style.container}>
      <div>
        <p style={style.instructions}>
          This app shows how the TextArea and Input components can interact with
          a redux store. They take and release the keyboard availability making
          window keyboard commands not triggered while the fields have focus.
        </p>
        <div style={style.contactForm}>
          <ContactForm />
        </div>
        <div style={style.letters}>
          <Letters />
        </div>
      </div>
    </div>
  );
};

export default App;
