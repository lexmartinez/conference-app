import * as types from './types';
import service from '../../services/conference';

export function conference() {
  return { type: types.INFO };
}

export function conferenceOk(payload) {
  return { type: types.INFO_OK, payload };
}

export function conferenceFail(error) {
  return { type: types.INFO_FAIL, error };
}

export function getInfo() {
  return (dispatch) => {
    dispatch(conference());
    return service
      .getInfo()
      .then(response => response.json())
      .then(response => dispatch(conferenceOk(response)))
      .catch(err => dispatch(conferenceFail(err)));
  };
}