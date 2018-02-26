var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Tarun kumar | article-one',
    heading:'article-one',
    date:'feb 21,2018',
    content:`<p>this is my main content.this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content</p>
            
            <p>this is my main content.this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content</p>
            <p>this is my main content.this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content</p>
            <p>this is my main content.this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content this is my main content</p>`
    
    
};
function createtemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var date=data.date;
var htmltemplate= `
<html>
    <head>
        <title>
           $(title)
        </title>
                <link href="/ui/style.css" rel="stylesheet" />

         <meta name="viewport" content="width-device-width,initial-scale=1"/>


    </head>
    <body>
        <div class="content">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
            $(heading)
        <div>
        $(date)    
        </div>
        <div>
            $(content)
        </div>
        </div>
</body>
</html>
`;
return createtemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res){
     res.send(createtemplate(articleOne));
});

app.get('/article-two',function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
