const express = require ('express');

const app = express();
const port = 8100;
const title = "Node.js Bonheur";

app.set('view engine', 'ejs');
// app.set("views", "view" )

app.get ('/', (req, res) =>{
   
    res.render("index");

});
app.get ('/project', (req, res) =>{
  
    res.render("project", {title});
 
 });
 app.get ('/about', (req, res) =>{
   
    res.render("about");
 
 });
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
