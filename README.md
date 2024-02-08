# Timestamp API

This repository contains a simple Node.js application that provides an API endpoint to retrieve current Unix timestamp and UTC time. Additionally, it allows users to pass a date string as a parameter to get the corresponding Unix timestamp and UTC time. The endpoint returns the timestamp data in the following JSON format:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### Setup

1. **Clone Repository:**
   ```bash
   git clone <repository_url>
   ```
   
3. **Install Dependencies:**
   ```bash
    npm install
   ```
   
3. **Run the Application:**
   ```bash
    npm start
   ```

4. **Access the API:**

   - Navigate to http://localhost:3000/api to get the current Unix timestamp and UTC time.
   - To get Unix timestamp and UTC time for a specific date, append the date in the format YYYY-MM-DD or Unix timestamp to http://localhost:3000/api/:date.

### Technologies Used

   - Node.js
   - Express.js
