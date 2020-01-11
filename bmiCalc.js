const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) =>{
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);

  let result = weight/(height*height);


  res.send('<h3>You BMI result is = </h3> '+ result);
});










app.listen(3000, () =>{console.log('Sever has started at port 3000');
});
