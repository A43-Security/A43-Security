import axios from 'axios';

const baseUrl = "http://10.0.13.254:3000/api/login";


export const loginUser = async ({
    username,
    password,
  }) => {
    try {
  
      const postOptions = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <your-auth-token>'
        }
      };
  
      const response = await axios.post(baseUrl, {
        username,
        password
      }, postOptions);
  
      return response?.data; 
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response error:', error.response.data);
        throw new Error(error.response.data); // Throw an error with the response data
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        throw new Error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
        throw new Error('Error setting up request: ' + error.message);
      }
    }
  };