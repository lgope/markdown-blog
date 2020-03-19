const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      createdAt: Date.now(),
      describtion: 'test description'
    },
    {
      title: 'Test Article 2',
      createdAt: Date.now(),
      describtion: 'test description 2'
    }
  ];
  res.render('index', { articles });
});

const port = process.env.PORT | 3000;

app.listen(port, () => console.log(`server is listening at ${port}`));
