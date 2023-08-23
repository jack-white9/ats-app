# JobBuddy (backend)

## About

This repo contains the backend to JobBuddy, a tool for generating keywords from a job description.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)

### Installation

1. Get an [OpenAI API key](https://openai.com/blog/openai-api)

2. Create a `.env` file with the following contents:

```shell
OPENAI_API_KEY = 'ENTER YOUR API KEY'
```

3. Run Docker Compose

```shell
docker-compose up --build
```

### Usage

The backend provides the `/api/get_description_keywords` endpoint, which can be used via a `GET` request with a job description provided in the `message` query param.

**Health Check**

```shell
curl -v http://localhost:80/api/
# Response: Success
```

**Get Description Keywords**

```shell
curl -v http://localhost:80/api/get_description_keywords?message=we%20need%20someone%20who%20knows%20typescript
# Response: {"role":"assistant","content":"1. TypeScript\n2. JavaScript\n3. Front-end development\n4. Software development\n5. Object-oriented programming\n6. Web development\n7. HTML \n8. CSS"}
```
