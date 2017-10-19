
console.log("loaded the index file");
var express = require('express'),
    app = express(),
    path = process.cwd();

console.log ("*******path is ",path);
app.set('port',(process.env.PORT||5000));


/*get the home page */

app.route('/').get(function(req,res){
  res.sendFile(path + "/index.html");
});
app.use('/',express.static(__dirname+'/'));
/*********** add the skybox folder here and it may work **********/
//app.use('/css',express.static(__dirname+'/public/css'));
//app.use('/images',express.static(__dirname+'/public/images'));

app.listen(app.get('port'),function(){
console.log("Node app is running on port",app.get('port'));
})
