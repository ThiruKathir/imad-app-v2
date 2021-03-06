var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
            'article-one' : {
                name: 'Article one | Thiru Kathir',
                heading: 'Article One',
                date: 'Feb 22, 2017',
                content: `
                <p>
                            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                        </p>
                          <p>
                            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                        </p>
                          <p>
                            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                        </p>`
            },
            'article-two' : { 
                name: 'Article Two | Thiru Kathir',
                heading: 'Article One',
                date: 'Feb 22, 2017',
                content: `
                <p>
                            This is the content for my second article. 
                        </p>`
            },
            'article-three' : {
                name: 'Article Three | Thiru Kathir',
                heading: 'Article Three',
                date: 'Feb 22, 2017',
                content: `
                <p>
                            This is the content for my Third     article. 
                        </p>`
                
            }
};
    
function createTemplate (data) {
    var name = data.name;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
        var htmlTemplate = `
        <html>
            <head>
                <title>
                     ${name}    
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
        <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
        </div>
        </body>
            </html>
            `;
            return htmlTemplate;
}
            
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter', function (req, res) {
    counter = counter + 1
    res.send(counter.toString())
});

var names= [];
app.get('/submit-name', function(req,res) {
  // get the name from the request object
  var name= req.query.name
  names.push(name);
  //JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res){
    // article name == article-one
    //  articles [articleName] == {} content object for articel one
    var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) { // url= /submit-name?name=xxxxxxxxxxxxxxxxx
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
