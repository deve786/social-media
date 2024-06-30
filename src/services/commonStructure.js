import axios from 'axios';

export const commonRequest = async (method, url, body, isFormData = false) => {
    const token = localStorage.getItem('token');
    const config = {
        method,
        url,
        headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(isFormData ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' })
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
