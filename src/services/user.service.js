import axios from "axios";
const api_url = process.env.REACT_APP_URL;
export const registerUser = (data) => {
    return axios.post(`${api_url}/users`, data);
};
export const loginUser = (data) => {
    return axios.post(`${api_url}/users/login`, data);
};
export const fetchUsers = (config) => {
    return axios.get(`${api_url}/users`, config);
};
export const updateUserStatus = ({ userId, data, config }) => {
    console.log(data)
    return axios.patch(`${api_url}/users/${userId}/status`, data, config);
}