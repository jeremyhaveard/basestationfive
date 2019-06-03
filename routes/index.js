var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/blog', function(req, res){
  res.render('blog', {
    title: 'Blog'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

app.use(express.static(__dirname + '/public'));

module.exports = router;

