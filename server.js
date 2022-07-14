


//console.log( __filename );
//console.log( __dirname );
// npm install express --save
//npm install body-parser --save
//npm install cookie-parser --save
//npm install multer --save
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cookieParser = require('cookie-parser')


//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
//app.use(multer({ dest: '/tmp/'}));


app.get('/', function(req, res) {
   console.log("Cookies: ", req.cookies)
});

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
});

app.get('/uploadfile.html', function (req, res) {
   res.sendFile( __dirname + "/" + "uploadfile.htm" );
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
  var  response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});


app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;

   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
});

app.get('/live', function (req, res) {
   res.send(`App is live3., ENV = ${process.env.ENV}`);
})

app.get('/ready', function (req, res) {
   res.send('App is ready.');
})


var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port

   console.log(`App listening at http://${host}, ${port}`);
});
