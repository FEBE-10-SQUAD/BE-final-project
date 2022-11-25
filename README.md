# BE-final-project
## seluruh response
```json
{
    "status": status_code,
    "message": "messasge",
    "data": [{"property":"val"},{"property":"val"}],
    "date": "2022-11-23T10:50:39.070Z"
}
```

#### POST: /api/register
body:
```json
{
    "username": "testName",
    "email": "test@test.com",
    "password": "test"
}
```

#### POST: /api/login
body:
{
    "email": "test@test.com",
    "password": "test"
}

#### GET: /api/profile/cv/:id
mengambil link pada pdf
#### POST: /api/profile/cv/:id
upload file pdf yang ada di form-data
form: pdf file

#### GET: /api/profile/:id

#### PUT: /api/profile/:id
body raw: 
```json
{
    "profile": {
        "nama":"sssswwsss",
        "kota":"kota",
        "alamat":"alasssddsssssssssssssssssssssssssat",
        "tanggal_lahir":"2010-11-23T15:20:33.324Z",
        "no_handphone":"123123133",
        "about_me":"about_me"
    }
}
```

property yang digunakan tidak harus semua melainkan bisa beberapa seperti ini masih valid
```json
{
    "profile": {
        "nama":"sssswwsss",
        "kota":"kota",
        "about_me":"about_me"
    }
}
```

untuk menghapus juga dapat dilakukan dengan cara update dengan nilai kosong
```json
{
    "profile": {
        "nama":"",
        "kota":"",
        "about_me":""
    }
}
```
body form-data: profile image file

#### DELETE: /api/profile/:id
menghapus seluruh data yang ada pada profile
