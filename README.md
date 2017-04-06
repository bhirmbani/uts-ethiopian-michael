# WikiRestorant
Simple app that collect all information about foods, menus and restaurants

### Installation

Run within Node JS:

```javascript
npm install
npm start
```

### REST API
Access the API from http://localhost:3000/api
Below is usage of our API:

| Route | HTTP | Description |
| :--- | :---: | :--- |
| /api/foods | GET | Get all the food details |
| /api/foods/:id | GET | Get detail food by id |
| /api/foods | POST | Add food |
| /api/foods/:id | DELETE | Delete food by id |
| /api/foods/:id | PUT | Update food with new detail |
| /api/foods/:id | PATCH | Update food with new specific field |
| /api/restaurants | GET | Get all the restaurants details |
| /api/restaurants/:id | GET | Get detail restaurants by id |
| /api/restaurants | POST | Add restaurants |
| /api/restaurants/:id | DELETE | Delete user by id |
| /api/restaurants/:id | PUT | Update user with new detail |
| /api/restaurants/:id | PATCH | Update user with specific info detail |

\* You must specify property for adding or updating book:
  - username [string]
  - password [string]
  - name [string]
  - dateofbirth [integer]
  - placeofbirth [integer]
  - gender [string]
  - role [string]




