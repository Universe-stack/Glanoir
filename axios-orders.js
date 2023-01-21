import axios from "axios";

const instance = axios.create({
    baseURL:'https://beih-technologies-d65d4-default-rtdb.firebaseio.com/'
})

export default instance;