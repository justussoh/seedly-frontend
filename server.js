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
                key: 'credit_cards',
                label: 'Credit Cards'
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
                label: 'Beginner'
            },
            {
                level: 2,
                label: 'Rookie'
            },
            {
                level: 3,
                label: 'WonderKid'
            },
            {
                level: 4,
                label: 'Prodigy'
            },
            {
                level: 5,
                label: 'Genius'
            },
            {
                level: 6,
                label: 'Master'
            },
            {
                level: 7,
                label: 'Grandmaster'
            },
            {
                level: 8,
                label: 'Wizard'
            },
            {
                level: 9,
                label: 'God of Wisdom'
            },
            {
                level: 10,
                label: 'Unicorn'
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
    now.setHours(now.getHours()-3);
    res.send({
        questions: [
            {
                category: ['investments', 'stock_discussion'],
                status: ['recent_activity', 'unanswered'],
                title: 'Markets have been so volatile in the past weeks. How have the various robos in Singapore rebalanced portfolios?',
                description: 'At Syfe, our portfolios are constructed to shield investors from significant losses, preserve the strength of their portfolios, and position them to capture the upside as the market makes its eventual recovery. Despite the volatility, our portfolios have remained resilient, with smaller dips in value as compared to the benchmarks and broader market: https://www.syfe.com/magazine/coronavirus-pandemic-how-syfe-builds-resilience-into-portfolios/\n' +
                    '\n' +
                    'Simply put, our automated risk managed investing (ARI) algorithm had rebalanced portfolios to bring portfolio risk back in line with our investors\' chosen risk level. For our 15% Downside Risk portfolios, our timely adjustment to increase the share of lower-risk bonds resulted in a significantly smaller dip of 10%, compared to our benchmark\'s loss of 21%.\n' +
                    '\n' +
                    'Our risk-based investing strategy ultimately delivers better risk-adjusted returns over the long term, and better peace of mind for our clients during this tumultuous period.',
                answer: [],
                answerTime: now,
                userId: 1,
                likes: [1, 2, 3],
            },
            {
                category: ['investments', 'stock_discussion'],
                status: ['recent_activity', 'trending'],
                title: 'With this coronavirus hooha going on is it a bad time for me to start using StashAway?',
                description: 'Just DCA weekly or monthly. Time in market > Timing the market.',
                answer: ['Answer 1', 'Answer 2'],
                answerTime: now,
                userId: 2,
                likes: [1],
            },
            {
                category: ['milelion', 'credit_cards'],
                status: ['recent_activity', 'trending', 'unanswered'],
                title: 'If you receive a refund to a credit card but don\'t have an account with the card\'s issuing bank, where does the refunded money go?',
                description: 'I usually get the refund when i buy stuff online and the item is returned and my money is refunded.\n' +
                    '\n' +
                    'Using DBS credit card, it will appear as CR beside that amount.\n' +
                    '\n' +
                    'The refunded amount will store as credit in your credit card account and will be used to offset your other expenses. Otherwise it will remain as credit until you spend money then that credit will become zero.\n' +
                    '\n' +
                    'I make videos about interesting stuff at youtube',
                answer: [],
                answerTime: now,
                userId: 3,
                likes: [1,2],
            }
        ]
    });
});

app.get('/api/userId', (req, res) => {

    let data = [
        {
            userId:1,
            displayName:'Justus Soh',
            level: 3,
        },
        {
            userId:2,
            displayName:'John Poh',
            level: 7,
        },
        {
            userId:3,
            displayName:'Sarah Chan',
            level: 10,
        },
    ];

    if (req.query.userId) {
        let userId = parseInt(req.query.userId);
        data = data.filter(user=>user.userId === userId);
    }

    res.send({
        users: data,
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));