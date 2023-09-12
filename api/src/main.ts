import express from 'express';
import * as path from 'path';
import fs from 'fs';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
console.log('/app/dist/apps/client');

fs.readdir('/app/dist/apps/client', function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

app.use('/', express.static('../apps/client'));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
