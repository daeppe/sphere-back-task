# Sphere Back Task

Backend para criação de tarefas para um usuário.

## Descrição

Este é um backend feito em Node.js para cadastrar tarefas que você precisa, colocando título, data e descrição.

## Instalação

Para começar, certifique-se de ter o [Node.js](https://nodejs.org/) e o [Yarn](https://yarnpkg.com/) instalados em seu sistema.

1. Comece utilizando o comando:
```bash
nvm use
``` 

2. Depois de utilizar o mesmo nvm baixe as dependências.
```bash
yarn 
```

3. Crie o arquivo .env e preencha os dados dele.
```bash
cp .env.example .env
```

## Uso
### Rota geral
**URL:** 'https://sphere-back-task.onrender.com'
### Rota health
**URL:** '/'

**Método HTTP:** GET

**Resposta:**
```JSON
"Projeto Sphere Back Task, Sun Feb 25 2024 18:27:38 GMT-0300 (Brasilia Standard Time)"
```
***
### Rotas User
**URL:** /api/user/create

**Método HTTP:** Post

**Body:** 
```JSON
{
	"name": "Daniel Epichin",
	"email": "epichin@email.com",
	"password": "123456"
}
```
**Resposta:**
```JSON
{
	"name": "Daniel Epichin",
	"email": "epichin@email.com",
	"id": "94876fcc-ebb5-4df8-a184-9972096dfef1"
}
```
***
**URL:** /api/user/login

**Método HTTP:** Post

**Body:** 
```JSON
{
	"email": "epichin@email.com",
	"password": "123456"
}
```
**Resposta:**
```JSON
{
	"id": "94876fcc-ebb5-4df8-a184-9972096dfef1",
	"name": "Daniel Epichin",
	"email": "epichin@email.com"
}
```
***
**URL:** /api/user/update

**Método HTTP:** Patch

**Body:** 
```JSON
{
	"email": "epichin@email.com",
	"password": "123455"
}
```
**Resposta:**
```JSON
{
	"id": "06755d3d-c68b-42c0-ab99-e43356aafe5f",
	"name": "Daniel Epichin",
	"email": "epichin@email.com"
}
```
***
**URL:** /api/user/delete

**Método HTTP:** Delete

**Body:** 
```JSON
{
	"email": "epichin@email.com"
}
```
**Resposta:**
Status 204
```JSON

```
***

### Rotas Task
**URL:** /api/task/create

**Método HTTP:** Post

**Body:** 
```JSON
{
	"title": "Finalizar o teste",
	"deadline": "2024-02-26",
	"description": "Fazer o teste técnico para entrega.",
	"isCompleted": false,
	"user": "94876fcc-ebb5-4df8-a184-9972096dfef1"
}
```
**Resposta:**
```JSON
{
	"title": "Finalizar o teste",
	"deadline": "2024-02-26",
	"description": "Fazer o teste técnico para entrega.",
	"isCompleted": false,
	"user": "94876fcc-ebb5-4df8-a184-9972096dfef1",
	"id": "97e61277-a13e-4a10-a7ca-b0f1e871f2e1"
}
```
***
**URL:** /api/task/findtaskcompleted

**Método HTTP:** Get

**Body:** 
```JSON
{
	"user": "94876fcc-ebb5-4df8-a184-9972096dfef1"
}
```
**Resposta:**
```JSON
[
	{
		"id": "97e61277-a13e-4a10-a7ca-b0f1e871f2e1",
		"title": "Finalizar o teste",
		"deadline": "2024-02-26",
		"description": "Fazer o teste técnico para entrega.",
		"isCompleted": true
	}
]
```
***
**URL:** /api/task/findtasknotcompleted

**Método HTTP:** Get

**Body:** 
```JSON
{
	"user": "94876fcc-ebb5-4df8-a184-9972096dfef1"
}
```
**Resposta:**
```JSON
[]
```
***
**URL:** /api/task/tocomplete

**Método HTTP:** Patch

**Body:** 
```JSON
{
	"title": "Finalizar o teste",
	"deadline": "2024-02-26",
	"description": "Fazer o teste técnico para entrega.",
	"isCompleted": false,
	"user": "94876fcc-ebb5-4df8-a184-9972096dfef1",
	"id": "97e61277-a13e-4a10-a7ca-b0f1e871f2e1"
}
```
**Resposta:**
```JSON
{
	"id": "97e61277-a13e-4a10-a7ca-b0f1e871f2e1",
	"title": "Finalizar o teste",
	"deadline": "2024-02-26",
	"description": "Fazer o teste técnico para entrega.",
	"isCompleted": true
}
```
***
**URL:** /api/task/delete

**Método HTTP:** Delete

**Body:** 
```JSON
{
	"id": "97e61277-a13e-4a10-a7ca-b0f1e871f2e1"
}
```
**Resposta:**
Status 204
```JSON

```
***