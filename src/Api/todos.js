import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todoapp-c9b89-default-rtdb.europe-west1.firebasedatabase.app',
    // timeout: 5000
});


export default instance;