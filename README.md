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
| /api/foods | GET | Get all the foods details |
| /api/foods/:id | GET | Get detail food by id |
| /api/foods | POST | Add food |
| /api/foods/:id | DELETE | Delete food by id |
| /api/foods/:id | PUT | Update food with new detail |
| /api/foods/:id | PATCH | Update food with new specific field |
| /api/restaurants | GET | Get all the restaurants details |
| /api/restaurants/:id | GET | Get detail restaurant by id |
| /api/restaurants | POST | Add restaurant |
| /api/restaurants/:id | DELETE | Delete restaurant by id |
| /api/restaurants/:id | PUT | Update restaurant with new detail |
| /api/restaurants/:id | PATCH | Update restaurant with new specific field |