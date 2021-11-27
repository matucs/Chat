# Message board project

This project created as a messenger board sample.
Nodejs, React, Redux, Thunk are technologies that hase been used in the code.
![](public/mb.PNG)
## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run mock-api`

Runs the back-end part.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
In this part there are some APIs that the client app could comunicates with.
- Channel and message storage can be an in-memory database (global variable).
- On server start, storage is populated with a fixed set of empty channels.

The Apis are:
- GET endpoint for querying channels
- GET http://localhost:8080/channels
- GET endpoint for querying channel’s messages
- GET http://localhost:8080/messages/javascript
- POST endpoint for submitting new messages to a channel
- POST http://localhost:8080/javascript

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

