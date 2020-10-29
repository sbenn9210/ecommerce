const resolvers = {
    Query: {
        me: () => {
            return {
                username: 'Shawn Bennys'
            }
        },

        user: (parent, args) => {
            return {
                username: 'Dave Davids'
            }
        }
    }
}

module.exports ={
    resolvers
}