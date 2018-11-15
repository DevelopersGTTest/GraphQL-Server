const express = require('express');
const app = express();

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hola a todos!'
};

// GraphQL End-Point
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));


const PORT = 3000

//Esto escucha el puerto
app.listen(PORT, ()=>{
    console.log(`
    🆗.  GraphQL Corriendo en: ${PORT}
    `)
});
