var axios = require('axios');

var lat = '40.630710';
var lon = '-3.165907';

var config = {
  method: 'get',
  url: `https://api.openbrewerydb.org/breweries?by_dist=${lat},${lon}&per_page=1&page=0`,
  headers: { }
};

axios(config)
.then(function (response)
{
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
