import axios from 'axios';

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://tt-33-anywhere-fitness.herokuapp.com/api/'
    })
}

export default axiosWithAuth;