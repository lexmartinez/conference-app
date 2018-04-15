import config from '../config';

export default {
  getEvents: () => fetch(`${config.API_URL}/events`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
  })
}