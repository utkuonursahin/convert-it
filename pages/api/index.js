import nc from 'next-connect';

const handler = nc()
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {
    res.json({ hello: 'posted' })
  })

export default handler;