import apiClient from './apiClient';

export async function login(username: string, password: string) {
    const res = await apiClient.post('/auth/login/', { username, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    return user;
}

export async function register(data: {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}) {
    const res = await apiClient.post('/auth/register/', data);
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    return user;
}

export async function getUser() {
    const res = await apiClient.get('/auth/user/');
    return res.data;
}

export async function logout() {
    await apiClient.post('/auth/logout/');
    localStorage.removeItem('token');
}