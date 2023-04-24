const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Started Server Branch + ITG')
})

app.post('/branch', async (req, res) => {

  try {
    const formData = req.body;

    console.log('back end form data', formData)

    const response = await axios.post('https://link-generator-v2.api.ourbranch.com', formData, {
      headers: {
        'x-api-key': 'bI0nf695ilIZBijR0vAOfqdKvxB5gd5yYtJdvpwY2NtyjkASKKluFfkagl3xc8RA',
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);

    console.log('response', response.data)
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});