const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000
const lat = '40.630710';
const lon = '-3.165907';
const config = {
  method: 'get',
  url: `https://api.openbrewerydb.org/breweries?by_dist=${lat},${lon}&per_page=50&page=0`,
  headers: { }
};
var respuesta = {}

function muestraBirrerira(birrerias) {

    buffer = '<html><body><ol>';

    for (birreria in birrerias)
    {
        buffer += `<li>${birrerias[birreria].name}</li>`;
    }

    buffer += '</ol></body></html>';
    return buffer;
}

axios(config)
.then(function (response)
{
  respuesta = response.data;
})
.catch(function (error)
{
  console.log(error);
});

app.get('/', (req, res) =>
{
  miPage = muestraBirrerira(respuesta)
  res.send(miPage);
})

app.listen(port, () =>
{
  console.log(`Example app listening on port ${port}`)
})
