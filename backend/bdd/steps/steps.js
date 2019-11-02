const defineSupportCode = require("cucumber").defineSupportCode;
const assert = require("assert");
const axios = require("axios");

defineSupportCode(function({ Given, Then, When }) {
  let endpoint = null;

  async function getStatus(endpoint) {
    return await axios.get(endpoint);
  }

  Given("I want to access all books", function() {});

  Given("I want to store a book", function() {});

  Given("I want to update a book name", function() {});

  Given("I want to delete a book", function() {});

  Given("I want to access all employees", function() {});

  Given("I want to store a employee", function() {});

  Given("I want to update a employee name", function() {});

  Given("I want to delete a employee", function() {});

  When("I get the endpoint {string}", function(route) {
    endpoint = route;
  });

  Then("I pass the {string}, {string}, {string}, {string}, {string}, {string}, {string}", function(
    name,
    author,
    publisher,
    yearPublication,
    area,
    purchaseDate,
    pricePaid
  ) {
    axios
      .post(endpoint, {
        name,
        author,
        publisher,
        yearPublication,
        area,
        purchaseDate,
        pricePaid
      })
      .then(x => assert(x.status, 200));
  });

  Then("I pass the _id = {string} and the name = {string}", function(_id, name) {
    axios.put(endpoint, { _id, name }).then(x => assert(x.status, 200));
  });

  Then("I pass the _id = {string} to delete", function(_id) {
    axios.delete(endpoint, { data: { _id } }).then(x => assert(x.status, 200));
  });

  Then("I receive a status {int}", function(answer) {
    getStatus(endpoint).then(x => assert.equal(x.status, answer));
  });

  Then(
    "I pass the name = {string}, email = {string}, oabNumber = {int} and password = {string}",
    function(name, email, password, oabNumber) {
      axios
        .post(endpoint, {
          name,
          email,
          password,
          oabNumber
        })
        .then(x => assert(x.status, 200));
    }
  );
});
