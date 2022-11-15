import axios from 'axios';

const tokiumAPI = axios.create({
    baseURL: 'https://tokum-api-test.herokuapp.com/'
});

export default tokiumAPI;