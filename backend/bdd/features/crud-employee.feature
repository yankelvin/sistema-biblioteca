Feature: Crud Employees
    Scenario: Get all employees
        Given I want to access all employees
        When I get the endpoint "http://localhost:3333/api/employees"
        Then I receive a status 200

    Scenario: Store a employee
        Given I want to store a employee
        When I get the endpoint "http://localhost:3333/api/new/employee"
        Then I pass the name = "name" and the oabNumber = "oabNumber"

    Scenario: Update a employee
        Given I want to update a employee name
        When I get the endpoint "http://localhost:3333/api/update/employee"
        Then I pass the _id = "5daf5f8fbd915437d430ce42" and the name = "Ostheobaldo"

    Scenario: Delete a employee
        Given I want to delete a employee
        When I get the endpoint "http://localhost:3333/api/delete/employee"
        Then I pass the _id = "5daf67feba8808378cc2b691" to delete
