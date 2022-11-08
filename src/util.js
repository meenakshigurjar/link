import axios from 'axios';
const userDataFromApi = axios.get('https://jsonplaceholder.typicode.com/users');
export { userDataFromApi };
