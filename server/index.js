const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const name = 'ScheduleUpdate';

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`${name} app listening at http://localhost:${port}`);
});
