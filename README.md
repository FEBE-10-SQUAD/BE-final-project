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
```json
{
  "email": "test@test.com",
  "password": "test"
}
```

#### POST: /api/profile/cv/:id
upload file cv ke databse. Cara untuk mengupload from menggunakan from-data.
form: pdf file

#### GET: /api/profile/cv/:id
mengambil link yang menyimpan file pdf yang dapat dilihat dan download.

#### GET: /api/profile/:id
mengambil keseluruhan data profile yang dimiliki user termasuk link foto profil.


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

untuk menghapus juga dapat dilakukan dengan cara update dengan null atau nilai kosong
```json
{
  "profile": {
    "nama":"",
    "kota":null,
    "about_me":""
  }
}
```

endpoint juga dapat digunakan untuk mengupload foto profil. melalui form-data
body form-data: profile image file

#### DELETE: /api/profile/:id
menghapus seluruh data yang ada pada profile, penghapusan juga termasuk dengan bookmark, cv, dan foto profil.
id = user id
id_job = job id

#### POST: /api/bookmark/:id/job/:id_job
menambahkan bookmark pada akun user. request tidak memerlukan body.
id = user id
id_job = job id

#### DELETE: /api/bookmark/:id/job/:id_job
menghapus bookmark pada user akun user. request tidak memerlukan body.
id = user id
id_job = job id

#### DELETE: /api/bookmark/:id
menghapus seluruh bookmark yang dimiliki oleh user.
id = user id

#### GET: /api/bookmark/:id
mengambil semua bookmark yang dimiliki oleh user. request tidak memerlukan body
