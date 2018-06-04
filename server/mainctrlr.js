const axios = require("axios");
let employeeList = [];

module.exports = {
  getEmployees: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_Employees()
      .then(employees => res.status(200).send(employees))
      .catch(err => res.status(500).send(err));
  }
};
