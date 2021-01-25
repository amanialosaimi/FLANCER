const { Router } = require('express')
const index = Router()

index.route('/')
    .get((request, response) => {
        response.send("Welcome to Project 3 - Backend")
    })

module.exports = { index }