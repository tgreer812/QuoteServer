const express = require('express');
const quoteRouter = express.Router();
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

quoteRouter.get('/', (req, res, next) => {
    const author = req.query;
    if (author.person) {
        res.send({
            'quotes': quotes.filter( q => q.person.toLowerCase() === author.person.toLowerCase())
        });
    }
    
    res.send({
        'quotes': quotes
    });
});

quoteRouter.post('/', (req, res, next) => {
    const { quote, person } = req.query;

    if(quote && person) {

        const newResource = {
            'quote': quote,
            'person': person
        }

        quotes.push(newResource);

        res.status(201).send({
            'quote': newResource
        });
        return;
    }
    res.status(400).send({});
});

quoteRouter.get('/random', (req, res, next) => {
    res.status(200).send({
        'quote': getRandomElement(quotes)
    });
});




module.exports = quoteRouter;


//Maurice Wilkes