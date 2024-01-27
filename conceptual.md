### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - JWT also stands for JSON Web Token
  - An open standard implemented across different technology stacks allowing for the easy and manageable 
    sharing of tokens
  - String composed of ( Header, Payload, Signature )
    - header - metadata about a token ( signing algorithm used / token type )
    - payload - data to be stored inside of token 
      - such as a user ID
      - is encoded not encrypted ( no secret info please! )
    - signature - version of header and payload signed with a secret key 
      - uses algorithm specified in header 
  

- What is the signature portion of the JWT?  What does it do?

  - Is the portion of the token that is created by taking the encoded header, payload, secret key, and the signing algorithm 
    specified inside of the header then hashing and encoding them.
  - This portion of the JWT will ensure integrity of any token created by the user. If any part of the token is modified such
    as the header or payload by someone who is not authorized, then the signature will no longer match that of the creater, thus 
    rendering the token to be invalid.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  - If a JWT is intercepted, yes an attacker can see what is inside of the payload however, there is no way for this user to
    alter or modify any of the information inside without the correct signature and secret key to verify their authorization. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  - A version of JWT implementation would be to create a token specific to a user and save this token for that very user 
    for use throughout the application. For instance, creating a user with login credentials ( username, password ), use this
    very login information specifically the password to create a token for that user. So now, as long as the user is logged in
    and you know they are who they say they are, you can allow their verified token to be used as needed anywhere within the
    application. 

- Compare and contrast unit, integration and end-to-end tests.

  Unit Tests - Testing individual units of code to ensure the successful completion of a task 
               These tests keep focus on isolating and verifying teh functionalify of individual units of code

  Integration Tests - Testing code in groups or combinations to ensure they work together as intended 
                      Not as complete as end-to-end tests but can test code in ways that will show different functions 
                      and methods can work together to achieve an end goal without failure / errors  
  
  End to end tests - Testing that will ensure the whole application or program is tested from start to finish 
                     Often these tests are the hardest to ensure are fully inclusive of the total functionality of the application
                     in question but offer a great assurance that an application is fully functional in practice with real world 
                     specifications. 

- What is a mock? What are some things you would mock?

  A practice commonly used in unit testing with the goal of "mocking" required information 
  Used when tests rely on the functionality of other complex objects
  Some things you could mock include:
    - an api 
    - complex objects like Math.random();
    - a database 

- What is continuous integration?

  Practice of merging or adding small changes to the working codebase frequently rather than large infrequent changes to the codebase
  Goal of building better software by developing and testing in smaller increments 
   - Automate tests when pushing code 
   - Reject deployments if tests fail 
   - Notify when changes occur   

- What is an environment variable and what are they used for?

  - a variable serving the purpose of altering or influencing the environment of an application and operating system 
  Environment Variables can: 
    - store configuration settings 
    - store secure information 
    - allow more portable applications that can run in different environments such as "test", "production" and "development" 
      depending on the intention of the developer 

- What is TDD? What are some benefits and drawbacks?

  TDD or Test Driven Development is a software development approach that prioritizes writing tests before actually writing code for an 
  application

  - Write tests first ( Yes many of these tests will fail )
  - Only write the necessary code needed to pass the test no filler code 
  - Focus on the task to complete 
  - As you add more code continue to ensure tests are passing 
  ( Remember Red, Green, Refactor )
    red - tests fail 
    green - write code to get passing tests 
    refactor - refactor code as needed 

- What is the value of using JSONSchema for validation?

  There are many value benefits when it comes to using JSONSchema for validation in programming many of which are performance related:
    - the ability to fail fast before bad data gets to a database 
    - reduce prcessing and validation code 
    - implement a validation system that is easy to setup and maintain 

- What are some ways to decide which code to test?

  - Focus on testing the primary objectives of the code 
  - Focus on security, functionality and readability 
  - Keep tests simple and allow them to test code efficiently 

- What does `RETURNING` do in SQL? When would you use it?

  This clause will allow you to return data that was modified by an sql query
  There are many cases in which you could use this information some cases include: 
    - wanting to return selected information to the user
    - checking what information was updated or added to the database
    - great for working with results 

- What are some differences between Web Sockets and HTTP?

  Web Sockets:
  - a protocol that will provide full-duplex communication ( the ability for both parties to send and recieve information / data simultaneously )
  - maintain persistant connection without repeatedly opening and closing connections for each communication 
  - great for real-time applications where immediate updates are crucial 

  HTTP: 
  - half-duplex communication ( communication will only occur one direction at a time )
  - uses the request response model ( the client sends a request and the server will send a response with requested data )
  - great for retrieving documents, web pages, images and even interacting with API's

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  For me personally, I really enjoyed working with Flask more. With that being said I see the potential for both so I will 
  continue to practice and work with both frameworks so I can continue to imporve my working knowledge of both 
