const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const moogoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

//allow cross origin requests
app.use(cors());

moogoose.connect("mongodb+srv://<username>:<password>@cluster0.vjkgo.mongodb.net/graphql_tut?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to db"))
.catch(err => console.log(err))

app.use('/graphql', graphqlHTTP({
  schema, 
  graphiql: true
}));

app.listen(5000, () => {
  console.log("Server is now listening for requests on port 5000");
});