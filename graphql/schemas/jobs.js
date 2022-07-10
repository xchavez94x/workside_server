const { buildSchema } = require('graphql');

const graphQLSchema = buildSchema(`
    type hello {
        message: String
    }

    type users {
        message: String
    }

    type rootQuery {
        hello: hello
        users: users
    }

    schema {
        query: rootQuery
    }
`);

module.exports = graphQLSchema