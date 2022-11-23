# BE-final-project

```
seluruh response
{
    "status": 201,
    "message": "Account successfully created",
    "data": null,
    "date": "2022-11-23T10:50:39.070Z"
}

POST: /api/register
body:
{
    "username": "testName",
    "email": "test@test.com",
    "password": "test"
}

POST: /api/login
body:
{
    "email": "test@test.com",
    "password": "test"
}

---

**Get Data**

```
GET: http://localhost:8080/v1/admin/jobs
```

```
GET: http://localhost:8080/v1/admin/jobs?category=Backend
```

```
GET: http://localhost:8080/v1/admin/jobs?category=Backend&name=Web
```

**Get Data By Id**

```
GET: http://localhost:8080/v1/admin/jobs/:id
```

**Get Data By User Id**

```
GET: http://localhost:8080/v1/admin/:id/jobs
```

**Post Data**

```
POST: http://localhost:8080/v1/admin/jobs
```

**Update Data**

```
UPDATE: http://localhost:8080/v1/admin/jobs/:id
```

**Delete Data**

```
DELETE: http://localhost:8080/v1/admin/jobs:id
```