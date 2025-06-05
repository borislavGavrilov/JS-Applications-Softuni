import { get, post } from './requster.js';
import { baseUsersUrl } from '../constants.js';
import { removeUserData, setUserData } from '../utills.js';

async function register(userData) {
    const result = await post(`${baseUsersUrl}/register`, userData);
    setUserData(result);
    return result;
}

async function login(userData) {
    const result = await post(`${baseUsersUrl}/login`, userData);
    setUserData(result);
    return result;
}

async function logout() {
    await get(`${baseUsersUrl}/logout`);
    removeUserData();
}

const usersService = { register, login, logout };
export default usersService;