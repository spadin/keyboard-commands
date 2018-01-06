import Letter from './Letter';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  selected: state.keyboard.pressedKeys[ownProps.letter],
});

export default connect(mapStateToProps)(Letter);
