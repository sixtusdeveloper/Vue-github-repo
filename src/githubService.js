import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';

export const getRepos = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
};
