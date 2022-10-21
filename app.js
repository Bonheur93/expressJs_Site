const express = require ('express');

const app = express();
const port = 8100;
const title = "Node.js Bonheur";

app.set('view engine', 'ejs');
// app.set("views", "view" )

app.get ('/', (req, res) =>{
   
    res.render("index");

});
app.get ('/Project', (req, res) =>{
  
    res.render("Project", {title});
 
 });
 app.get ('/About', (req, res) =>{
   
    res.render("About");
 
 });
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
