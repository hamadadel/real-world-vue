import axios from 'axios';

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/hamadadel/json-server-for-vue-app',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  event(id) {
    return apiClient.get('/events/' + id);
  },
};
