import axios from 'axios';

export const getUser = async () => {
    let header = getHeader();
    const response = await axios.get('http://127.0.0.1:4001/users/me', header);
    return response.data;
};

export const getUserToken = () => {
    return JSON.parse(localStorage.getItem('token'));
};

export const getHeader = () => {
    const token = localStorage.getItem('token');
    const header = {
        headers: {
            Authorization: `${token}`
        }
    };

    return header;
};

export const makeLogoutCall = () => {
    localStorage.removeItem('token');
    axios.post('http://127.0.0.1:4001/users/logout');
};
