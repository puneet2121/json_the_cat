const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, desc) => {

    if (error) {
      callback(error,null)
    } else {
      const data = JSON.parse(desc);
      if(data['message'] != undefined){
        callback(data['message'])
        return
      }
      if (data.length === 0) {
        callback('breed not found',null)
      } else {
        const desc = data[0]['description']
        callback(null,desc.trim());

      }
  
    }
    // callback(error,desc);
    

  });
};
module.exports = { fetchBreedDescription };

