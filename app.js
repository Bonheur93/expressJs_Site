const express = require ('express');

const app = express();
const port = 8100;

app.set('view engine', 'ejs');
app.set("views", "./view" )

app.get ('/', (req, res) =>{
   
    res.render("index");

});
app.get ('/pageOne', (req, res) =>{
  
    res.render("pageOne");
 
 });
 app.get ('/pageTwo', (req, res) =>{
   
    res.render("pageTwo");
 
 });
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
