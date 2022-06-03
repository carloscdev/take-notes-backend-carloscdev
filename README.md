# Take Notes v 1.0

A simple project with Node JS, Express, Mongo DB

## APIs

#### Get List Notes (optional params: search - is_active)

```bash
GET http://localhost:3000/api/notes
```
#### Get Detail Note

```bash
GET http://localhost:3000/api/notes/:id
```
#### Create Note

```bash
POST http://localhost:3000/api/notes
Content-Type: application/json

{
  "name": "Title Note",
  "description": "Description Note",
  "user": "username"
}
```
#### Update Note

```bash
PUT http://localhost:3000/api/notes
Content-Type: application/json

{
  "name": "Title Note",
  "description": "Description Note",
  "user": "username",
  "status": "username",
  "is_active": true,
}
```
#### Delete Note

```bash
DELETE http://localhost:3000/api/notes/:id
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
