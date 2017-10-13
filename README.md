
# React Fribase chat (sample)

Sample for react chat using firebase with emoji :)

# Install and Running

`git clone git@github.com:dmarczydlo/react-firebase-chat.git`

npm install

# Create config file
Create config.json into /src folder like: 

```json
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "YOUR_AUTH_DOMAIN",
  "databaseURL": "YOUR_DATABASE_URL",
  "projectId": "YOUR_PROJECT_ID",
  "storageBucket": "YOUR_STORAGE_BUCKET",
  "messagingSenderId": "YOUR_MESSAGING_SENDER_ID"
}
```

# Firebase rules configuration

Change database rules like below 

```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

```

# Start app

npm start
navigate to http://localhost:3000 in your browser of choice.