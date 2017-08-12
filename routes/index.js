var express = require('express');
var router = express.Router();

var URL = "<mongodb account-connect>"; //connects database to your mongo account

const db=require('monk')(URL);

const docs=db.get('sway');
/* GET home page. */
router.get('/welcome', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  docs.find({ },

    function (err,docs){
      if(err) console.log(err);

      else
      res.json(docs[0]);
    })
});

router.post('/well', function (req, res, next) {

    var name=  req.body.name;
    var password= req.body.password;
    docs.insert({"name": name, "password": password}, function (err, docs) {
        if (err)
            console.log("error");

        else
            res.send("successful");
    });
});

router.get('/login', function(req, res, next) {
    res.send('hi swati');
});

router.get('/lo', function(req, res, next){

  docs.update(
    //criteria
    {
      // "_id": {"$oid": "594b9dbcb691ec16703f6922" },
      "name": "sawti "},

    //update
    { $push: { "group": {"name": "user3"} } } ,

    //callback
    function (err, docs) {
      if (err)
          console.log(err);

      else
          res.send("successful");
  });
});




module.exports = router
