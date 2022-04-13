const http = require('http');
const today = require('./today');



const requestListener = function (req, res) {
  const time = today.getDate();
  const hours = time.getHours();

  let greeting = "";
  if (hours >= 0 && hours < 12) {
    greeting = "Good Morning!"
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon!"
  } else {
    greeting = "Good Evening!"
  }

  res.writeHead(200);
  res.end(`${greeting} The date today is ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);