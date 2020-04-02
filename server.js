const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send({status: 'OK'});
});

app.get('/api/topic_list', (req, res) => {
    res.send({
        topics: [
            {
                key: 'milelion',
                label: 'MileLion'
            },
            {
                key: 'stock_discussion',
                label: 'Stock Discussion'
            },
            {
                key: 'investments',
                label: 'Investments'
            },
            {
                key: 'insurance',
                label: 'Insurance'
            },
            {
                key: 'property',
                label: 'Property'
            },
            {
                key: 'credit_card',
                label: 'Credit Card'
            },
            {
                key: 'savings',
                label: 'Savings'
            },
            {
                key: 'lifestyle',
                label: 'Lifestyle'
            },
            {
                key: 'family',
                label: 'Family'
            },
            {
                key: 'retirement',
                label: 'Retirement'
            },
            {
                key: 'career',
                label: 'Career'
            },
            {
                key: 'cpf',
                label: 'CPF'
            }
        ]
    });
});

app.get('/api/level_list', (req, res) => {
    res.send({
        levels: [
            {
                level: 1,
                label: 'WonderKid'
            },
            {
                level: 2,
                label: 'WonderKid'
            },
            {
                level: 3,
                label: 'WonderKid'
            },
            {
                level: 4,
                label: 'WonderKid'
            },
            {
                level: 5,
                label: 'WonderKid'
            },
            {
                level: 6,
                label: 'WonderKid'
            },
            {
                level: 7,
                label: 'WonderKid'
            },
            {
                level: 8,
                label: 'WonderKid'
            },
            {
                level: 9,
                label: 'WonderKid'
            },
            {
                level: 10,
                label: 'WonderKid'
            },


        ]
    });
});

app.get('/api/status_list', (req, res) => {
    res.send({
        statuses: [
            {
                key: 'recent_activity',
                label: 'Recent Activity'
            },
            {
                key: 'unanswered',
                label: 'Unanswered'
            },
            {
                key: 'trending',
                label: 'Trending'
            }
        ]
    });
});

app.get('/api/questions', (req, res) => {
    let now = new Date();
    now.setMonth(now.getMonth() - 3);
    res.send({
        questions: [
            {
                category: ['milelion', 'stock_discussion'],
                status: ['recent_activity', 'unanswered'],
                title: 'Test',
                description: 'My thoughts too. However, I think it may be due to the fact that manicure, hair dressing, facial services are a want not a need. Probably that\'s why the government placed less emphasis on the particular sector. And as you mentioned, digital solutions are limited for such sector and Singapore is moving towards a digital future, they do thus have to prioritise their packages and budget.\n' +
                    '\n' +
                    'Overall, I think the recent package and initiative do benefit the whole Singapore regardless of sector. It is very much dependent on how you view the situation.\n' +
                    '\n' +
                    'Here\'s my 2 cents worth of view point.',
                answer: ['Answer 1', 'Answer 2'],
                answerTime: now,
                userId: 1,
                likes: [1, 2, 3],
            }
        ]
    });
});

app.get('/api/userId', (req, res) => {

    let data = [
        {
            userId:1,
            displayName:'Test 1',
            level: 3,
        },
        {
            userId:2,
            displayName:'Test 2',
            level: 7,
        },
        {
            userId:3,
            displayName:'Test 3',
            level: 10,
        },
    ];

    if (req.query.user) {
        let userId = req.query.user;
        data = data.filter(user=>userId.userId === userId);
    }

    res.send({
        users: data,
    });
});




app.listen(port, () => console.log(`Listening on port ${port}`));