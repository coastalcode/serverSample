import Server from 'express';

export default function startServer() {
  const app = Server()
  app.get('/', (req, res) => {
    res.send("hello world");
  })
  app.listen(3000);
}