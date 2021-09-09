# Happy Belly - Backend

Is it difficult to you to eat the recommended fruit quantity every day? If so, your belly must be really upset!

**Happy Belly** has been created to track all my fruit intake and who knows, maybe someday track all yours too!

## Backend specs

## Collections

| Users      |        |          |
| ---------- | ------ | -------- |
| - name     | String | Required |
| - email    | String | Required |
| - password | String | Required |

| Fruits        |               |                |
| ------------- | ------------- | -------------- |
| - name        | String        | Required       |
| - size        | String (enum) | Required       |
| - eatenStatus | Boolean       | Default: false |
| - eatenDate   | Date          |                |

## Routes

| Routes                      |                        | Verb   | Auth | Params              |
| --------------------------- | ---------------------- | ------ | ---- | ------------------- |
| Log in                      | /api/auth/login/       | POST   | -    | { email, password } |
| Get all available fruits    | /api/fruit/            | GET    | -    |                     |
| Get today-eaten fruit count | /api/fruit/me          | GET    | YES  |                     |
| Create a fruit              | /api/fruit/me          | POST   | YES  | [{name, size}]      |
| Update a fruit              | /api/fruit/me/:fruitId | PUT    | YES  | { fields }          |
| Delete a fruit              | /api/fruit/me/:fruitId | delete | YES  |                     |
