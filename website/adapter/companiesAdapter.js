import axios from 'axios';

const baseUrl = "http://10.0.13.254:3000/api/companies";

export const getAllCompanies = async() => {
    try {
        const response = await axios.get(`${baseUrl}/stores`)

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
}