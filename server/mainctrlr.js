const axios = require("axios");
let employeeList = [];

module.exports = {
  getUsers: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_Users()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send(err));
  }
};
