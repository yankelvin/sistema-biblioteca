Feature: Crud Books
    Scenario: Get all books
        Given I want to access all books
        When I get the endpoint "http://localhost:3333/api/books"
        Then I receive a status 200

    Scenario: Store a book
        Given I want to store a book
        When I get the endpoint "http://localhost:3333/api/new/book"
        Then I pass the "name", "author", "publisher", "yearPublication", "area", "purchaseDate", "pricePaid"

    Scenario: Update a book
        Given I want to update a book name
        When I get the endpoint "http://localhost:3333/api/update/book"
        Then I pass the _id = "5daf5f8fbd915437d430ce42" and the name = "Teste Update"

    Scenario: Delete a book
        Given I want to delete a book
        When I get the endpoint "http://localhost:3333/api/delete/book"
        Then I pass the _id = "5daf5ebb61fc1216247f6847" to delete
