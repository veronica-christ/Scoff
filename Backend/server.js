
const express = require('express');
// const app = express();
const app = require('./app.js')
const port = process.env.PORT || 4000;
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use('/',(req,res)=>{


res.json({data:`server is working`})

})
app.listen(4000, () => console.log(`listening on http://localhost:4000`));