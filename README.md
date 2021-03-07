# REST Service deployed with Node.js and Docker

## Getting started
```sh
npm install
npm run start
```

## Endpoints



| Method | Endpoint    | Description |
|--------|-------------|-------------|
| GET    | /autores    |   Returns a JSON with the name of the autors          |
| POST   | /suma       |   Receives a JSON with only a tag named "nums" that will refer to an array of numbers to be added. Returns a JSON with a tag named "respuesta", which will have the result of the operation.          |
| POST   | /resta      |   Receives a JSON with a tag named "nums" that will refer to an array of numbers, and another tag named "numToSubs" that will refer to a number that will be substracted from each number of the array. Returns a JSON with a tag named "respuesta", which will have the result of the operation.           |
| POST   | /multiplica |   Receives a JSON with only a tag named "nums" that will refer to an array of numbers to be multiplied. Returns a JSON with a tag named "result", which will have the result of the operation.          |
| POST   | /divide     |    Receives a JSON with a tag named "nums" that will refer to an array of numbers, and another tag named "numToDiv" that will refer to a number that will be divided from each number of the array. Returns a JSON with a tag named "respuesta", which will have the result of the operation.          |
| POST   | /free       |  Receives a JSON with a tag named "operation" that will refer to a STRING with a full aritmetical operation. Ex: "56 * 10 - 8 * 15 / 5 + 6". Returns a JSON with a tag named "respuesta", which will have the result of the operation.            |