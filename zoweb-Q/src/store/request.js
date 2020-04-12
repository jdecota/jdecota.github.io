import axios from 'axios';

export const API_URL = 'http://localhost:9000/api/v1/';

// Post Request
export function postData(url, data, isAuthReq = true) {
  const requestUrl = API_URL + url;
  let headers = {};
  
  if (isAuthReq) {
    const key = localStorage.getItem('access_token');
    headers = { headers: { 'Authorization': 'Bearer ' + key } };
  }

  return axios.post(requestUrl, data, headers).catch((error) => Promise.reject(error.response.data));
}

// Get Request
export function getData(url, isAuthReq = true) {
  const requestUrl = API_URL + url;
  let headers = {};
  
  if (isAuthReq) {
    const key = localStorage.getItem('access_token');
    headers = { headers: { 'Authorization': 'Bearer ' + key } };
  }

  return axios.get(requestUrl, headers);
}

// Put Request
export function putData(url, data, isAuthReq = true) {
  const requestUrl = API_URL + url;
  let headers = {};
  
  if (isAuthReq) {
    const key = localStorage.getItem('access_token');
    headers = { headers: { 'Authorization': 'Bearer ' + key } };
  }

  return axios.put(requestUrl, data, headers);
}

// Delete Request
export function deleteData(url, isAuthReq = true) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    const key = localStorage.getItem('access_token');
    headers = { headers: { 'Authorization': 'Bearer ' + key } };
  }

  return axios.delete(requestUrl, headers);
}
