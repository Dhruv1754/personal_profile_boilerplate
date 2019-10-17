
const MongoClient = require('mongodb').MongoClient;


/**
 * @param req
 * @param res
 * @returns void
 */
function getMongoInfo(req, res) {

    console.log("data received:",req.body);
    let credintals={username:req.body.user,password:req.body.pass}
    //replace with your respective connection url

    const uri = "mongodb+srv://"+ credintals.username+":"+credintals.password+"@cluster0-beg4i.mongodb.net/test?retryWrites=true&w=majority";
    
    try {
      MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var query = req.body.query;

        console.log("query executed:",query)
        dbo.collection("test_collection").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log("query result",result);
          db.close();
          return res.send({data:result})
        });
      });
    }
    catch(err){
      console.log(err)
    }


}

module.exports= getMongoInfo