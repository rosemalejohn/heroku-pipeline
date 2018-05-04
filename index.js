const Koa = require('koa');
const Router = require('koa-router');
const Body = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const app = new Koa();

Router.post('/graphql', Body(), graphqlKoa({ schema: myGraphQLSchema }));
Router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

Router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(Router.routes());
app.use(Router.allowedMethods());
app.listen(3000);
