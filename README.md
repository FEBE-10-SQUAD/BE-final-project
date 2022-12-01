# BE-final-project
## Seluruh Response
```json
{
  "status": status_code,
  "message": "messasge",
  "data": [{"property":"val"},{"property":"val"}],
  "date": "2022-11-23T10:50:39.070Z"
}
```

## POST: `http://localhost:8080/register`
body:
```json
{
  "username": "testName",
  "email": "test@test.com",
  "password": "test"
}
```

## POST: http://localhost:8080/login
body:
```json
{
  "email": "test@test.com",
  "password": "test"

```

## POST: http://localhost:8080/profile/cv/:id
upload file cv ke databse. Cara untuk mengupload from menggunakan form-data.
form: pdf file

## GET: http://localhost:8080/profile/cv/:id
mengambil link yang menyimpan file pdf yang dapat dilihat dan download.

## PUT: http://localhost:8080/profile/cv/:id
update file cv ke database. Cara untuk mengupload from menggunakan form-data.
form: pdf file

## DELETE: http://localhost:8080/profile/cv/:id
menghapus cv yang telah diupload

## GET: http://localhost:8080/profile/:id
mengambil keseluruhan data profile yang dimiliki user termasuk link foto profil.


## PUT: http://localhost:8080/profile/:id
body raw: 
```json
{
    "nama":"sssswwsss",
    "kota":"kota",
    "alamat":"alasssddsssssssssssssssssssssssssat",
    "tanggal_lahir":"2010-11-23T15:20:33.324Z",
    "no_handphone":"123123133",
    "about_me":"about_me"
}
```

property yang digunakan tidak harus semua melainkan bisa beberapa seperti ini masih valid
```json
{
    "nama":"sssswwsss",
    "kota":"kota",
    "about_me":"about_me"
}
```

untuk menghapus juga dapat dilakukan dengan cara update dengan null atau nilai kosong
```json
{
    "nama":"",
    "kota":null,
    "about_me":""
}
```

endpoint juga dapat digunakan untuk mengupload foto profil. melalui form-data

body form-data: profile image file

## DELETE: `http://localhost:8080/profile/:id`
menghapus seluruh data yang ada pada profile, penghapusan juga termasuk dengan bookmark, cv, dan foto profil.
- id = user id
- id_job = job id

## POST: `http://localhost:8080/bookmark/:id/job/:id_job`
menambahkan bookmark pada akun user. request tidak memerlukan body.
- id = user id
- id_job = job id

## DELETE: `http://localhost:8080/bookmark/:id/job/:id_job`
menghapus bookmark pada user akun user. request tidak memerlukan body.
- id = user id
- id_job = job id

## DELETE: `http://localhost:8080/bookmark/:id`
menghapus seluruh bookmark yang dimiliki oleh user.
- id = user id

## GET: `http://localhost:8080/bookmark/:id`
mengambil semua bookmark yang dimiliki oleh user. request tidak memerlukan body

---
## **Admin CRUD (Job)**
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
DELETE: http://localhost:8080/v1/admin/jobs/:id
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


## **Apply Job (User & Admin)**

**Post Data**

**Request**

```
POST: http://localhost:8080/v1/apply-job/users
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YwYzZjMTJiNmRkMzY3OGFkYWRmNSIsImVtYWlsIjoic2FubG9rYWphQGdtYWlsLmNvbSIsImlhdCI6MTY2OTU3Mzk2OCwiZXhwIjoxNjY5NTk1NTY4fQ.oJCshvQGKSyHDyC0scL7LqNX-Sg2ClnACci_F65Il6E
```

**Body**

```
{
    "companyId": "637f1c228a101bfc2e286f5c",
    "jobId": "6383ad478de3435223a67668",
    "isAccepted": "false"
}
```

**Response**

```
{
    "status": 201,
    "message": "Data created successfully",
    "data": {
        "isAccepted": false,
        "userId": "637f0c6c12b6dd3678adadf5",
        "companyId": "637f1c228a101bfc2e286f5c",
        "jobId": "6383ad478de3435223a67668",
        "_id": "6383ad9f8de3435223a6766c",
        "createdAt": "2022-11-27T18:34:07.534Z",
        "updatedAt": "2022-11-27T18:34:07.534Z",
        "__v": 0
    },
    "date": "2022-11-27T18:34:07.537Z"
}
```

**Get Apply Job Data By Company Id**

**Request**

```
http://localhost:8080/v1/apply-job/admin/:id/status
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YwYzZjMTJiNmRkMzY3OGFkYWRmNSIsImVtYWlsIjoic2FubG9rYWphQGdtYWlsLmNvbSIsImlhdCI6MTY2OTU3NDIxNiwiZXhwIjoxNjY5NTk1ODE2fQ.MhzwJhOwvYxNTTozgCqQ7jvRJBfqCQpZ3a9R0XPYA38
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 637f1c228a101bfc2e286f5c |

**Response**

```
{
    "status": 200,
    "message": "Data grabbed successfully",
    "data": [
        {
            "_id": "6381b5b4b71d8f2100a72220",
            "isAccepted": false,
            "userId": {
                "_id": "637f0c6c12b6dd3678adadf5",
                "username": "Sanlok Aja"
            },
            "companyId": {
                "_id": "637f1c228a101bfc2e286f5c",
                "username": "PT. Tokopedia"
            },
            "jobId": {
                "_id": "637f220947892454143b8093",
                "name": "Frontend Developer (Wishlist Product)",
                "salary": "7500000",
                "image": "",
                "description": "PT. Tokopedia is hiring, send your cv!"
            },
            "createdAt": "2022-11-26T06:44:04.668Z",
            "updatedAt": "2022-11-26T06:44:04.668Z",
            "__v": 0
        },
        {
            "_id": "6381b5c9b71d8f2100a72224",
            "isAccepted": false,
            "userId": {
                "_id": "637f28c49db147af32cc6598",
                "username": "Anselma"
            },
            "companyId": {
                "_id": "637f1c228a101bfc2e286f5c",
                "username": "PT. Tokopedia"
            },
            "jobId": {
                "_id": "637f220947892454143b8093",
                "name": "Frontend Developer (Wishlist Product)",
                "salary": "7500000",
                "image": "",
                "description": "PT. Tokopedia is hiring, send your cv!"
            },
            "createdAt": "2022-11-26T06:44:25.020Z",
            "updatedAt": "2022-11-26T06:44:25.020Z",
            "__v": 0
        },
        {
            "_id": "6383ad9f8de3435223a6766c",
            "isAccepted": false,
            "userId": {
                "_id": "637f0c6c12b6dd3678adadf5",
                "username": "Sanlok Aja"
            },
            "companyId": {
                "_id": "637f1c228a101bfc2e286f5c",
                "username": "PT. Tokopedia"
            },
            "jobId": {
                "_id": "6383ad478de3435223a67668",
                "name": "Shopping Cart",
                "salary": "6500000",
                "image": "http://res.cloudinary.com/dbplhgttm/image/upload/v1669573958/j0u4mel0hsg9xk6qx1sl.png",
                "description": "PT. Tokopedia is hiring, send your cv!"
            },
            "createdAt": "2022-11-27T18:34:07.534Z",
            "updatedAt": "2022-11-27T18:34:07.534Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T18:35:24.204Z"
}
```

**Get Apply Job Data By User Id**

**Request**

```
http://localhost:8080/v1/apply-job/users/:id/status
```

**Token**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YxYzIyOGExMDFiZmMyZTI4NmY1YyIsImVtYWlsIjoidG9rb3BlZGlhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTU3NDA5NywiZXhwIjoxNjY5NTk1Njk3fQ.bFWdM2dSGrzEgR8iRbo2BeK5SJSoIrt3AJCmaxfjsD8
```

**Path Variables**

| Key |         Value            |
|-----|--------------------------|
|id   | 637f0c6c12b6dd3678adadf5 |

**Response**

```
{
    "status": 200,
    "message": "Data grabbed successfully",
    "data": [
        {
            "_id": "6381b5b4b71d8f2100a72220",
            "isAccepted": false,
            "userId": "637f0c6c12b6dd3678adadf5",
            "companyId": {
                "_id": "637f1c228a101bfc2e286f5c",
                "username": "PT. Tokopedia"
            },
            "jobId": {
                "_id": "637f220947892454143b8093",
                "name": "Frontend Developer (Wishlist Product)",
                "salary": "7500000",
                "image": "",
                "description": "PT. Tokopedia is hiring, send your cv!"
            },
            "createdAt": "2022-11-26T06:44:04.668Z",
            "updatedAt": "2022-11-26T06:44:04.668Z",
            "__v": 0
        },
        {
            "_id": "6381b6b8d5bb40d1e3e28990",
            "isAccepted": false,
            "userId": "637f0c6c12b6dd3678adadf5",
            "companyId": {
                "_id": "637f0c3c12b6dd3678adadea",
                "username": "PT. Grab"
            },
            "jobId": null,
            "createdAt": "2022-11-26T06:48:24.061Z",
            "updatedAt": "2022-11-26T06:48:24.061Z",
            "__v": 0
        },
        {
            "_id": "6383ad9f8de3435223a6766c",
            "isAccepted": false,
            "userId": "637f0c6c12b6dd3678adadf5",
            "companyId": {
                "_id": "637f1c228a101bfc2e286f5c",
                "username": "PT. Tokopedia"
            },
            "jobId": {
                "_id": "6383ad478de3435223a67668",
                "name": "Shopping Cart",
                "salary": "6500000",
                "image": "http://res.cloudinary.com/dbplhgttm/image/upload/v1669573958/j0u4mel0hsg9xk6qx1sl.png",
                "description": "PT. Tokopedia is hiring, send your cv!"
            },
            "createdAt": "2022-11-27T18:34:07.534Z",
            "updatedAt": "2022-11-27T18:34:07.534Z",
            "__v": 0
        }
    ],
    "date": "2022-11-27T18:37:52.643Z"
}