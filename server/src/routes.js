module.exports = (DB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/hello', async (req, res) => {
    res.json({msg: "Hello, world!"});
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({msg: `Hello, ${req.params.name}`});
  });

  router.post('/questions', async (req, res) => {
    const name = req.body.name;
    const content = req.body.content
    await DB.createQuestion(name, content)
    res.json({msg: name + ' has been added!'});
  })

  return router;
}
