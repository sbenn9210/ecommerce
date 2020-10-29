import {gql} from 'apollo-server'

const typeDefs = gql`
    type Query {
        me: User
        user(id: ID!): User
    }

    type User {
        username: String!
    }
`

module.exports = {
    typeDefs
}