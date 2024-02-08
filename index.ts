// init project
import express from 'express';
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
import cors  from 'cors';
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


app.get("/api/hell", function (req, res) {
 
});



// listen for requests 
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
