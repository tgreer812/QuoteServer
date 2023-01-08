const express = require('express');
const app = express();
const quoteRouter = require('./routes/quotes');


const PORT = process.env.PORT || 80;

app.use(express.static('public'));
app.use('/api/quotes', quoteRouter);

app.listen(PORT, () => {
    console.log("Server listening!");
})

