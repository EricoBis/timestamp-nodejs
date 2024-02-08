// init project
import express from "express";
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
import cors from "cors";
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api", (req, res) => {
  const date = new Date();

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;
  let parsedDate;
  
  // Check if 'date' is a number (Unix timestamp)
  if (!isNaN(date)) {
    parsedDate = new Date(parseInt(date));
  } else {
    // Otherwise, create a new Date object directly
    parsedDate = new Date(date);
  }

  if (!isValidDate(parsedDate))
    return res.json({
      error: "Invalid Date",
    });

  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

function isValidDate(date) {
  return !isNaN(date.getTime());
}

// listen for requests
var listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
