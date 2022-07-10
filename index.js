const { config } = require('dotenv')
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {
    graphqlHTTP
} = require('express-graphql');
const {
    corsConfig
} = require('./utils/constants');
const root = require('./graphql/resolvers/root');
const schema = require('./graphql/schemas/jobs');
const {
    connect
} = require('mongoose');

config()
const port = process.env.PORT;
const dbUrl = process.env.DB_URI;

app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use('/api', graphqlHTTP({
    rootValue: root,
    schema: schema,
    graphiql: true
}))

// app.get('/', (req, res) => res.send('Hello World!'))


connect(dbUrl)
    .then(res => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
            console.log('connected to db')
        })
    })
    .catch( error => {
        if( error ) {
            throw new Error({
                message: "SOmething went wrong",
                code: 500,
                data: error
            })
        }
    })