var express = require('express');
var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

var router = express.Router();

var photos = [];
photos.push({
    name: 'Node.js Logo',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
    name: 'Ryan Speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

router.get('/', function(req, res) {
    res.render("photos",{
        title: 'Photos',
        photos: photos 
    
    });
});

router.get('/upload',function(req, res){
    res.render('photos/upload',{
        title:'Photo upload'
    
    });


})

router.post('/upload',function(req, res){
            var file_name = req.body.photo.name;
            var img = req.files['photo[image]'];
            var name = req.files['photo[image]'].name;
            var path = join('/uploads/', name);
            console.log(img);
            console.log(path);
            
            fs.rename(img.path, path, function(err){
               var photo = new Photo({
                    name: name,
                    path: path
              
                });
               photo.save(function (err, photo) {
                     if (err) return console.error(err);
               });
            });
           

});

module.exports = router;
