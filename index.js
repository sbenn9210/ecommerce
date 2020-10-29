import express from 'express'
import cors from 'cors'
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './graphql/schema'
import {resolvers} from './graphql/resolvers'

const app = express(cors())


const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.applyMiddleware({app, path:'/graphql'})

app.listen({port: 8000}, () => {
    console.log('Apollo Server on http://localhost:8000/graphql')
}) 