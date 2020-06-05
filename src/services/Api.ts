// import axios from "axios";

const API_ROOT = process.env.URL || "http://localhost:3000"
const TIMEOUT = 20000
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

class ApiService {

  client: any;

  // constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth }) {
  //   const client = axios.create({
  //     baseURL,
  //     timeout,
  //     headers,
  //     auth,
  //   });

  //   client.interceptors.response.use(this.handleSuccess, this.handleError)
  //   this.client = client;
  // }

  // handleSuccess(response: any) {
  //   return response;
  // }

  // handleError(error: any) {
  //   return Promise.reject(error)
  // }

  // get(path: string) {
  //   return this.client.get(path).then((response: { data: any; }) => response.data);
  // }
}

export default ApiService