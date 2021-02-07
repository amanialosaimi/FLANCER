const { Router } = require('express')
const app = Router()

const Contact = require('../model/contact')

/* post for the contact  */
app.post('/contact', async (req, res) => {
  await Contact.create(req.body)
    // On a successful `create` action, respond with 201
    .then(() => {
      res.status(201)
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});



module.exports = { app }