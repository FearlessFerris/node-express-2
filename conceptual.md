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
  - 

- If a JWT is intercepted, can the attacker see what's inside the payload?

- How can you implement authentication with a JWT?  Describe how it works at a high level.

- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?

- What is continuous integration?

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
