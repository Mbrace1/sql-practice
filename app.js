const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, 'public')));
});

app.post('/', async (req, res) => {
  const { username, password } = req.body;

  await setTimeout(() => {
    if (username === 'testUser' && password === 'Multiverse!') {
      res.send({ loggedIn: true });
      return;
    }
    res.send({ loggedIn: false });
    return;
  }, Math.random() * 4000);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}.`);
});
