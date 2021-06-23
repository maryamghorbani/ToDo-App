import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todoapp-c9b89-default-rtdb.europe-west1.firebasedatabase.app',
    // timeout: 5000
});

instance.interceptors.request.use( function (config) {
    console.log(config);
    return config;
}, function (err) {
    // handle errors
    return Promise.reject(err)
})

instance.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (err) {
    // system log

    return (Promise.reject(err));
})


export default instance;