import { connect } from 'react-redux';
import ScheduleView from './ScheduleView';
import { getInfo } from '../../reducers/ConferenceReducer/actions';

const mapStateToProps = state => ({
  ...state.conference
});

const mapDispatchToProps = dispatch => ({
  getInfo: () => {
    dispatch(getInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleView);