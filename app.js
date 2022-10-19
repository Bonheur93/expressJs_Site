const express = require ('express');

const app = express();
const port = 8100;

app.get ('/', (req, res) =>{
   
    res.sendFile(__dirname + "/view/index.html");

});
app.get ('/pageOne.html', (req, res) =>{
  
     res.sendFile(__dirname + "/view/pageOne.html");
 
 });
 app.get ('/pageTwo.html', (req, res) =>{
   
     res.sendFile(__dirname + "/view/pageTwo.html");
 
 });
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
