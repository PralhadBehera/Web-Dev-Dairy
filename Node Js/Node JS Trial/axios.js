
const axios = require('axios');
const express = require('express');
const data= express.Router();

const fetchData = () => {
  const url = 'http://jsonplaceholder.typicode.com/posts';
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

data.get('/data', async (req, res) => {
    try {
      const data = await fetchData(); // Call the imported function
      res.status(200).json(data); // Send the fetched data as JSON response
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
  });
module.exports = data; 

