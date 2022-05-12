const request = require('request');
const param = process.argv.slice(2)[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${param}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log('data', data.message)
  if (data.message) {
    console.log(data.message);
    return;
  }

  if (!data[0]) {
    console.log('Breed does not exist');
    return;
  }

  console.log(data[0]);
  // console.log('response', response)

});