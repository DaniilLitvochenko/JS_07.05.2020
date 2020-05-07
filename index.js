const moment = require('moment');
const date = moment().format('DD/MM/YYYY HH:mm');
//const port = 2233;

require('http')
.Server((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(`<h1>Литовченко Даниил</h1><h2>${date}</h2>`);
 })
.listen(process.env.PORT); 