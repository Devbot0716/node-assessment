const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const uc = require('./usersCtrl.js');

app.use(bodyParser.json());

//1
app.get('/api/users', uc.getQueriedUser);

//2
app.get('/api/users/:userId', uc.getUserById);

//3
app.get('/api/admins', uc.getAdmins);

//4
app.get('/api/nonAdmins', uc.getNonAdmins);

//5
app.get('/api/user_type/:userType', uc.getUserType);

//6
app.put('/api/users/:userId', uc.updateUserById);

//7
app.post('/api/users', uc.postNewUser);

//8
app.delete('/api/users/:userId', uc.deleteUserById);

app.listen(port, ()=> console.log("Listening on port " + port));
