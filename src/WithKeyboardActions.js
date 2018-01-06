import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {takeKeyboard, releaseKeyboard} from './ducks/keyboard';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({takeKeyboard, releaseKeyboard}, dispatch);

const WithKeyboardActions = ({takeKeyboard, releaseKeyboard, render}) =>
  render({takeKeyboard, releaseKeyboard});

export default connect(null, mapDispatchToProps)(WithKeyboardActions);
