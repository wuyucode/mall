import axios from "axios";

axios.defaults.timeout=10000;
axios.defaults.withCredentials=true;

export default axios