# DMS-ENTRY 프론트엔드-백엔드 간 공동 협업 과제

## 목적

- 서버의 API를 활용하여 자신만의 게시판을 구현할 수 있다.(프론트측)
- 클라이언트의 요구에 따라 API를 만들고, 서버를 구동할 수 있다.(서버측)

---

# API Documentation

## /signup

### POST

```http
POST /api/login HTTP/1.1
Host: unknown
User-Agent: your-client/1.0
Content-Type: application/json
Accept: */*
{
	"id": "DMS-Entry",
	"first_name": "재훈",
	"last_name": "김",
	"password": "asdf",
	"email": "asdf@gmail.com"
}
```

> 응답은 아래와 같다.

```http
HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8

HTTP/1.1 400 Bad Request
Content-Type: text/plain; charset=utf-8
```

> 계정을 생성하기 위해 사용됨

#### 속성

|    name    | type |    description    | required |
| :--------: | :--: | :---------------: | :------: |
|     id     | str  |      아이디       |   True   |
| first_name | str  | 이름 (예시: 재훈) |   True   |
| last_name  | str  |   성 (예시: 김)   |   True   |
|  password  | str  |     비밀번호      |   True   |
|   email    | str  |      이메일       |   True   |

## /login

### POST

```http
POST /api/signup HTTP/1.1
Host: unknown
User-Agent: your-client/1.0
Content-Type: application/json
Accept: */*
{
	"id": "DMS-Entry",
	"password": "asdf"
}
```

> 응답은 아래와 같다.

```http
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8

HTTP/1.1 401 Unauthorized
Content-Type: text/plain; charset=utf-8
```

> 사용자의 자격을 증명하기 위해 사용됨

#### 속성

|   name   | type | description | required |
| :------: | :--: | :---------: | :------: |
|    id    | str  |   아이디    |   True   |
| password | str  |  비밀번호   |   True   |

## /post

### POST

```http
POST /api/post HTTP/1.1
Host: unknown
User-Agent: your-client/1.0
Content-Type: application/json
Accept: */*
{
	"title": "아 집가고싶다",
	"content": "응~ 못가~"
}
```

> 응답은 아래와 같다.

```http
HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8

HTTP/1.1 400 Bad Request
Content-Type: text/plain; charset=utf-8
```

> 게시글을 작성하기 위해 사용됨

#### 속성

|  name   | type | description | required |
| :-----: | :--: | :---------: | :------: |
|  title  | str  |   아이디    |   True   |
| content | str  |  비밀번호   |   True   |

### GET

```http
GET /api/post HTTP/1.1
Host: unknown
User-Agent: your-client/1.0
Content-Type: application/json
```

> 응답은 아래와 같다.

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
  "posts": [
    {
      "title": "아 집가고싶다",
      "content": "응 못가~"
    },
    {
      "title": "이렇게 게시글 여러개를",
      "content": "리스트에 담아 보내줍니다."
    }
  ]
}

HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=utf-8

```

> 게시글을 작성하기 위해 사용됨

여러 개의 게시글 정보를 불러오는 데에 사용됩니다.

조회할 수 없다면 `status code 404`를 반환합니다.

### GET

```http
GET /api/post HTTP/1.1
Host: unknown
User-Agent: your-client/1.0
Content-Type: application/json
```

> 응답은 아래와 같다.

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
  "posts": [
    {
      "title": "아 집가고싶다",
      "content": "응 못가~"
    },
    {
      "title": "이렇게 게시글 여러개를",
      "content": "리스트에 담아 보내줍니다."
    }
  ]
}

HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=utf-8

```

> 게시글을 작성하기 위해 사용됨

여러 개의 게시글 정보를 불러오는 데에 사용됩니다.

조회할 수 없다면 `status code 404`를 반환합니다.