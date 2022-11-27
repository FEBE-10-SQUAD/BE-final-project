# **Backend Final Project**

## **Admin CRUD (Job)**
---

**Get Data**

**Request**

```
GET: http://localhost:8080/v1/admin/jobs
```

**Response**

```
{
    "status": 200,
    "message": "Data successfully grabbed",
    "data": [
        {
            "_id": "637f0c4b12b6dd3678adadf0",
            "category": "Backend Developer",
            "name": "Backend Developer (Store Management)",
            "company": "PT. Grab",
            "employee": "2500",
            "experience": "2",
            "salary": "7500000",
            "image": "",
            "description": "PT. Grab is hiring, send your cv!",
            "companyId": "637f0c3c12b6dd3678adadea",
            "createdAt": "2022-11-24T06:16:43.572Z",
            "updatedAt": "2022-11-24T06:16:43.572Z",
            "__v": 0
        },
        {
            "_id": "637f220947892454143b8093",
            "category": "Frontend Developer",
            "name": "Frontend Developer (Wishlist Product)",
            "company": "PT. Tokopedia",
            "employee": "25",
            "experience": "2",
            "salary": "7500000",
            "image": "",
            "description": "PT. Tokopedia is hiring, send your cv!",
            "companyId": "637f1c228a101bfc2e286f5c",
            "createdAt": "2022-11-24T07:49:29.022Z",
            "updatedAt": "2022-11-24T07:49:29.022Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T08:33:01.684Z"
}
```

**Request**

```
GET: http://localhost:8080/v1/admin/jobs?category=Backend
```

**Response**

```
{
    "status": 200,
    "message": "Data successfully grabbed",
    "data": [
        {
            "_id": "637f0c4b12b6dd3678adadf0",
            "category": "Backend Developer",
            "name": "Backend Developer (Store Management)",
            "company": "PT. Grab",
            "employee": "2500",
            "experience": "2",
            "salary": "7500000",
            "image": "",
            "description": "PT. Grab is hiring, send your cv!",
            "companyId": "637f0c3c12b6dd3678adadea",
            "createdAt": "2022-11-24T06:16:43.572Z",
            "updatedAt": "2022-11-24T06:16:43.572Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T08:38:35.265Z"
}
```

**Request**

```
GET: http://localhost:8080/v1/admin/jobs?category=Backend&name=Web
```

**Response**

```
{
    "status": 200,
    "message": "Data successfully grabbed",
    "data": [
        {
            "_id": "637f220947892454143b8093",
            "category": "Frontend Developer",
            "name": "Frontend Developer (Wishlist Product)",
            "company": "PT. Tokopedia",
            "employee": "25",
            "experience": "2",
            "salary": "7500000",
            "image": "",
            "description": "PT. Tokopedia is hiring, send your cv!",
            "companyId": "637f1c228a101bfc2e286f5c",
            "createdAt": "2022-11-24T07:49:29.022Z",
            "updatedAt": "2022-11-24T07:49:29.022Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T08:39:48.803Z"
}
```

**Get Data By Id**

**Request**

```
GET: http://localhost:8080/v1/admin/jobs/:id
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 637efb252aea47d4ccacc982 |

**Response**

```
{
    "status": 200,
    "message": "Data successfully grabbed",
    "data": {
        "_id": "637f0c4b12b6dd3678adadf0",
        "category": "Backend Developer",
        "name": "Backend Developer (Store Management)",
        "company": "PT. Grab",
        "employee": "2500",
        "experience": "2",
        "salary": "7500000",
        "image": "",
        "description": "PT. Grab is hiring, send your cv!",
        "companyId": "637f0c3c12b6dd3678adadea",
        "createdAt": "2022-11-24T06:16:43.572Z",
        "updatedAt": "2022-11-24T06:16:43.572Z",
        "__v": 0
    },
    "date": "2022-11-27T08:45:58.953Z"
}
```

**Get Data By Company Id**

**Request**

```
GET: http://localhost:8080/v1/admin/:id/jobs
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YxYzIyOGExMDFiZmMyZTI4NmY1YyIsImVtYWlsIjoidG9rb3BlZGlhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTUzODYwNiwiZXhwIjoxNjY5NTYwMjA2fQ.S9njjNRKPhBbA7YNjRhCsyYVyw_OaUlZ8y_1Dmr6FQ4
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 637f1c228a101bfc2e286f5c |

**Response**

```
{
    "status": 200,
    "message": "Data successfully grabbed",
    "data": [
        {
            "_id": "637f220947892454143b8093",
            "category": "Frontend Developer",
            "name": "Frontend Developer (Wishlist Product)",
            "company": "PT. Tokopedia",
            "employee": "25",
            "experience": "2",
            "salary": "7500000",
            "image": "",
            "description": "PT. Tokopedia is hiring, send your cv!",
            "companyId": "637f1c228a101bfc2e286f5c",
            "createdAt": "2022-11-24T07:49:29.022Z",
            "updatedAt": "2022-11-24T07:49:29.022Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T08:49:03.590Z"
}
```

**Post Data**

**Request**

```
POST: http://localhost:8080/v1/admin/jobs
```

**Body**

```
{
    "category": "Mobile Developer",
    "name": "Shopping Cart",
    "company: "PT. Tokopedia",
    "employee": "25",
    "experience": "2",
    "salary": "6500000",
    "image": "example.jpg",
    "description": "PT. Tokopedia is hiring, send your cv!"
}
```

**Response**

```
{
    "status": 201,
    "message": "Data created successfully",
    "data": {
        "category": "Mobile Developer",
        "name": "Shopping Cart",
        "company": "PT. Tokopedia",
        "employee": "25",
        "experience": "2",
        "salary": "6500000",
        "image": "http://res.cloudinary.com/dbplhgttm/image/upload/v1669539629/mmhmoubxv6xyjcghmxww.jpg",
        "description": "PT. Tokopedia is hiring, send your cv!",
        "companyId": "637f1c228a101bfc2e286f5c",
        "_id": "6383272eaa9f5978510b5fe1",
        "createdAt": "2022-11-27T09:00:30.073Z",
        "updatedAt": "2022-11-27T09:00:30.073Z",
        "__v": 0
    },
    "date": "2022-11-27T09:00:30.090Z"
}
```

**Update Data**

**Request**

```
PUT: http://localhost:8080/v1/admin/jobs/:id
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YxYzIyOGExMDFiZmMyZTI4NmY1YyIsImVtYWlsIjoidG9rb3BlZGlhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTUzODYwNiwiZXhwIjoxNjY5NTYwMjA2fQ.S9njjNRKPhBbA7YNjRhCsyYVyw_OaUlZ8y_1Dmr6FQ4
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 6383272eaa9f5978510b5fe1 |

**Body**

```
{
    "salary": "8500000"
}
```

**Response**

```
{
    "status": 201,
    "message": "Data updated sucessfully",
    "data": {
        "updatedJob": 1
    },
    "date": "2022-11-27T09:03:18.775Z"
}
```

**Delete Data**

**Request**

```
DELETE: http://localhost:8080/v1/admin/jobs:id
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YxYzIyOGExMDFiZmMyZTI4NmY1YyIsImVtYWlsIjoidG9rb3BlZGlhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTUzODYwNiwiZXhwIjoxNjY5NTYwMjA2fQ.S9njjNRKPhBbA7YNjRhCsyYVyw_OaUlZ8y_1Dmr6FQ4
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 6383272eaa9f5978510b5fe1 |

**Response**

```
{
    "status": 200,
    "message": "Data deleted successfully",
    "data": {
        "deletedJob": 1
    },
    "date": "2022-11-27T09:04:07.554Z"
}
```

