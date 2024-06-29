import axios from 'axios';

export const commonRequest = async (method, url, body) => {
    const token = localStorage.getItem('token');
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        ...(method === 'POST' && { data: body }),
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};
