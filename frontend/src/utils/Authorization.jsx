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
    var token = "Bearer " + localStorage.getItem('token');
    const auth = token.replaceAll('"', '');
    console.log(auth)
    const header = {
        headers: {
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NDY2OTg3NiwianRpIjoiNjAwZjc0Y2UtZTBmYy00OGJhLTg2ODYtYWIyMzQ1YWQ5MTk5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6InllZXQzQGdtYWlsLmNvbSIsImV4cCI6IlRodSwgMDkgSnVuIDIwMjIgMDY6MzE6MTYgR01UIn0sIm5iZiI6MTY1NDY2OTg3NiwiZXhwIjoxNjU0NjcwNzc2fQ.MdoWTQKpa3kAQVRQT22f8jHTe7XVfKgE0ytMFPdjAYI",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    return header;
};

export const makeLogoutCall = () => {
    localStorage.removeItem('token');
    axios.post('http://127.0.0.1:4001/users/logout');
};
