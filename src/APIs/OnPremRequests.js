// api/onprem-service.js
const axios = require('axios');

const serviceBaseUrl = 'http://localhost:8080'; // Replace with your on-premises service URL

// Example: Make a GET request to an on-premises service
axios.get(`${serviceBaseUrl}/api/data`)
  .then((response) => {
    console.log('Response from on-premises service:', response.data);
  })
  .catch((error) => {
    console.error('Error calling on-premises service:', error);
  });
