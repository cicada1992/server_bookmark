import express from 'express';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
  }
}

const { app } = new App();
const PORT_NUMBER = 8080;

app.listen(PORT_NUMBER, () => {
  console.log(`listening on ${PORT_NUMBER}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});
