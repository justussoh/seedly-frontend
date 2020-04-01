const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send({ status: 'OK' });
});

app.get('/api/topic_list', (req, res) => {
    res.send({ topics: [
            {
                key:'milelion',
                label: 'MileLion'
            },
            {
                key: 'stock_discussion',
                label:'Stock Discussion'
            },
            {
                key:'investments',
                label: 'Investments'
            }
        ] });
});


app.listen(port, () => console.log(`Listening on port ${port}`));