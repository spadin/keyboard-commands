import Input from './Input';
import React from 'react';
import TextArea from './TextArea';

const style = {
  margin: '0 auto',
  width: 520,
};

const ContactForm = () => (
  <div>
    <p>
      Focusing inside either of the input fields below will cause the keyboard
      commands to stop triggering on the simulated keyboard.
    </p>
    <div style={style}>
      <div>
        <Input placeholder="Name" />
      </div>
      <div>
        <TextArea placeholder="Comment" />
      </div>
    </div>
  </div>
);

export default ContactForm;
