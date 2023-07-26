const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router/router');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect("mongodb+srv://preeti:miausi2001@cluster0101.9ryctxd.mongodb.net/juniorIt", {
    useNewUrlParser: true  
})
.then( () => console.log("MongoDb is connected"))                          
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
  });
  