import * as types from './types';
import service from '../../services/events';

export function events() {
  return { type: types.EVENTS };
}

export function eventsOk(payload) {
  return { type: types.EVENTS_OK, payload };
}

export function eventsFail(error) {
  return { type: types.EVENTS_FAIL, error };
}

export function getEvents() {
  return (dispatch) => {
    dispatch(events());
    return service
      .getEvents()
      .then(response => response.json())
      .then(response => dispatch(eventsOk(response)))
      .catch(err => dispatch(eventsFail(err)));
  };
}