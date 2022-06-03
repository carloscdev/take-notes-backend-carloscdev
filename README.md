# Take Notes v 1.0

A simple project with Node JS, Express, Mongo DB

## APIs

#### Get List Notes (optional params: search - is_active)

```bash
GET https://take-notes-backend-carloscdev.herokuapp.com/api/notes
```
#### Get Detail Note

```bash
GET https://take-notes-backend-carloscdev.herokuapp.com/api/notes/:id
```
#### Create Note

```bash
POST https://take-notes-backend-carloscdev.herokuapp.com/api/notes
Content-Type: application/json

{
  "name": "Title Note",
  "description": "Description Note",
  "user": "username"
}
```
#### Update Note

```bash
PUT https://take-notes-backend-carloscdev.herokuapp.com/api/notes
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
DELETE https://take-notes-backend-carloscdev.herokuapp.com/api/notes/:id
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
