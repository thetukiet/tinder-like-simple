
module.exports = {  
  likeHandler: (db, req, res) => {
    const {id, dateOfBirth, title, firstName, lastName, picture} = req.body;

    const existUsername = db
      .get('likedUsers')
      .find((user) => id && user.id === id)
      .value();

    if (existUsername) {
      res.status(400).jsonp({
        message:
          'You already liked this profile',
      });
      return;
    }

    db.get('likedUsers').push(req.body).write();
    res.jsonp({message:"like success"});
  },

  passHandler: (db, req, res) => {
    const {id, dateOfBirth, title, firstName, lastName, picture} = req.body;

    const existUsername = db
      .get('passedUsers')
      .find((user) => id && user.id === id)
      .value();

    if (existUsername) {
      res.status(400).jsonp({
        message:
          'You already passed this profile',
      });
      return;
    }

    db.get('passedUsers').push(req.body).write();
    res.jsonp({message:"pass success"});
  }
};
