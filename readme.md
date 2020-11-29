# First Steps
- Run `npm install`
- After that, to run the API, run the command `npm start`

# Test
To execute the tests, run the command `npm run test`

# Layers

## use-cases
Contains the business rules and validations.

## external-services
Acesses the external APIs to get the recipes and gifs. The idea is to isolate this layer from the business rules.

## Tests
Contains the test files.

# API
To invoke the service, call {host}/recipes={params}

example: http://localhost:5000/recipes?i=onions,garlic
