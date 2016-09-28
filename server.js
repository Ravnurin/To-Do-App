var express = require('express');
var app = express();
/*var mongoJs = require('mongojs');
var db = mongoJs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');*/


app.use(express.static(__dirname)); // "/public"
//app.use(bodyParser.json());
app.listen(process.env.PORT || 3000);

/*

app.get('/', function(req, res){
    res.send("Hello world from server.js");
});

app.get('/api/contactList/getContacts', function (req, res) {
    
    db.contactlist.find(function(err, docs){
        
        res.send(docs);
    });
});

app.post('/api/contactList/createContact', function (req, res) {
    
    db.contactlist.insert(req.body, function(err, doc){
        res.send(doc);
    });
});

app.put('/api/contactList/updateContact', function (req, res) {
    
    console.log(req.body);
    var contact = req.body;
    
    db.contactlist.findAndModify({ query: { _id: mongoJs.ObjectId(contact._id)},
         update: {$set: { name: contact.name, email: contact.email, number: contact.number}},
         new: true}, function(err, doc){
            res.send(doc);        
    });
    
    
});

app.delete('/api/contactList/removeContact', function (req, res) {
    var id = req.query.id;
    
    db.contactlist.remove({ _id: mongoJs.ObjectId(id) }, function(err, doc){
        res.send(doc);
    });
    
});
*/



console.log('Starting hosting of "' + __dirname + '" on port:' + (process.env.PORT == null ? 3000 : process.env.PORT)); //do not change

