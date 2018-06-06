const axios = require("axios");
let employeeList = [];

module.exports = {
  getUsers: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_Users()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send(err));
  },
  sendProfile: (req, res, next) => {
    console.log(req.body);
    let { isEmployer, isJobSeeker } = req.body;

    const dbInstance = req.app.get("db");
    isEmployer && isJobSeeker === false
      ? dbInstance
          .addEmployer([
            req.body.firstName,
            req.body.lastName,
            req.body.companyName,
            req.body.email,
            req.body.companyBio
          ])
          .then(profile => res.status(200).send(profile))
          .catch(err => res.status(500).send(err))
      : dbInstance
          .addJobSeeker([
            req.body.firstName,
            req.body.lastName,
            req.body.email,
            req.body.bio
          ])
          .then(profile => res.status(200).send(profile))
          .catch(err => res.status(500).send(err));
  }
};
