# Layers

## use-cases
Contains the business rules and validations.

## external-services
Acesses the external APIs to get the recipes and gifs. The idea is to isolate this layer from the business rules.

## Tests
Contains the test files.

# API
To run the API, run the command `npm start`

To invoke the service, call {host}/recipes={params}

example: http://localhost:5000/recipes?i=onions,garlic

# Test
To execute the tests, run the command `npm run test`