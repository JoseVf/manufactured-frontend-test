# React + GraphQL frontend test

## Libraries used
* React
* GraphQL
* GraphQL Codegen
* GraphQL Request
* React Query
* React Hook Form
* JWT Decode
* React Router
* RSuite (components library)

## Functionality
Integrated to the given GraphQL endpoint, the app consists 4 in views:
* Identification: Where the user types their e-mail address and there's a validation to check if it's already registered. In case they are not registered it will send the user an e-mail to complete the Sign Up proccess. 
* Sign Up: If the e-mail is not registered, it will ask for the additional data to register the user. The e-mail address field is read-only since that information is taken from the JWT that is attached to the URL. There's an additional validation in case the JWT is malformed.
* Sign In: If the e-mail is registered, it will ask for the e-mail address and password. The e-mail field is pre-populated with the information from the Identification page.
* Home: After succesfully signing in, the user is presented with the information they registered in the Sign Up page. The Authorization token is stored in the Local Storage, so if the user close the browser and re-opens it the session will remain.
