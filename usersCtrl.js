const users = require('./userData.json');

module.exports = {

//1
  getQueriedUser: (req, res) =>{

    const { favorites, age, lastname, email } = req.query;

    if(favorites){
      const filteredFavorites = users.filter((e)=>{
        if(e.favorites.includes(favorites)){
          return true;
        } else {
          return false;
        }
      })
      res.status(200).send(filteredFavorites);
    } else if(age){
      const filteredAge = users.filter((e)=> e.age < age);
      res.status(200).send(filteredAge);
    } else if(lastname){
      const filteredLastName = users.filter((e)=> e.last_name == lastname);
      res.status(200).send(filteredLastName);
    } else if(email){
      const filteredEmail = users.filter((e)=> email == e.email);
      res.status(200).send(filteredEmail);
    } else {
      res.status(200).send(users);
    }
  },

  //2
    getUserById: (req, res) => {
            const { userId } = req.params;
            const foundUser = users.filter((e) => e.id == userId);
            if(foundUser.length > 0) {
                res.status(200).send(foundUser[0]);
            } else {
                res.status(404).json(null);
            };
        },

  //3
    getAdmins: (req, res) =>{
      const adminArr = users.filter((e) => e.type == "admin");
      res.status(200).send(adminArr);
    },

  //4
    getNonAdmins: (req, res) =>{
      const nonAdmins = users.filter((e) => e.type != "admin");
      res.status(200).send(nonAdmins);
    },

  //5
    getUserType: (req, res) => {
      const { userType } = req.params;
      const searchedUserType = users.filter((e)=> e.type == userType);
      res.status(200).send(searchedUserType);
    },

  //6
    updateUserById: (req, res) => {
      const { userId } = req.params;
      for (let i = 0; i < users.length; i++) {
        if (userId == users[i].id) {
          users.splice(i, 1, req.body);
        }
      }
      res.status(200).send(users);
    },

  //7
    postNewUser: (req, res) => {
      req.body.id = users.push(req.body);
      res.status(200).send(users);
    },

  //8
    deleteUserById: (req, res) => {
      const { userId } = req.params;
      for (var i = 0; i < users.length; i++) {
        if(userId == users[i].id){
          users.splice(i, 1);
        }
      }
      res.status(200).send(users);
    }


} //end of module.exports
