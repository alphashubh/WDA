import axios from 'axios';

const AxiosSetup = () => {
     var instance = axios.create({
        baseURL: 'http://10.224.213.130:3000',
         headers: {'token': cookie.load('token')}
    });
}

export default AxiosSetup;