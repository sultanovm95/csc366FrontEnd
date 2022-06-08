import axios from 'axios';

export const getUser = async () => {
    // let header = getHeader();
    // const response = await axios.get('http://127.0.0.1:5000/users/me', header);
    // const response = await axios.get('http://127.0.0.1:4001/users/me', header);
    return getUserToken();
};

export const getUserToken = () => {
    return JSON.parse(localStorage.getItem('token'));
};

export const getHeader = () => {
    var token = "Bearer " + localStorage.getItem('token');
    const auth = token.replaceAll('"', '');
    console.log(auth)
    const header = {
        headers: {
            'Authorization': auth,
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    return header;
};

export const makeLogoutCall = () => {
    localStorage.removeItem('token');
    // axios.post('http://127.0.0.1:4001/users/logout');
    axios.post('http://127.0.0.1:5000/users/logout');
};
