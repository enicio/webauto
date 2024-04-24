# Controle de Utilização de Automóveis - WebAPI

Este projeto é uma WebAPI desenvolvida para controlar a utilização de automóveis em uma empresa, permitindo o cadastro de automóveis e motoristas, além de registrar as utilizações dos automóveis pelos motoristas.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

### Rotas relativas a cadastro de Automóvel

```http
    POST /cars
```

```json
{
	"brand": "vw",
	"color": "orange",
	"plate": "rty-6785"
}
```

### Rotas relativas a cadastro de Motoristas


## Cadastrar um novo motorista

```http
    POST /drivers
```

```json
{
	"name": "Matilda"
}
```

## Atualizar um motorista cadastrado.
```http
    PUT /drivers/
```

```json
{
	"id": "59f30155-50a0-4dce-be9b-3f99a5ebfda6",
	"name": "Jean Cinza"
}
```

## Recuperar um motorista pelo seu identificador único.

```http
    PUT /drivers/{id}
```

## Listar os motoristas cadastrados, com filtro opcional por nome.

```http
    GET /drivers?name=Mathilda
```


### Rotas relativas a utilização de Automóvel

## Listar os registros de utilização cadastrados no sistema
```http
    GET /use-cars
```

## Finalizar a utilização de um automóvel por um motorista.
```http
    PUT /use-cars
```
```json
{
	"driverId": "4f238161-1afe-4eef-9872-3e833a1c5df7",
	"finishDate": "2024-01-01"
}
```

## Criar um registro de utilização de um automóvel por um motorista.
```http
    POST /use-cars
```
```json
{
  "driverId": "4f238161-1afe-4eef-9872-3e833a1c5df7",
  "carId": "92e3e267-e7e2-4b1e-ac53-e6c2fb0b4433",
  "startDate": "2020-01-01",
  "reason": "Foi pra Mantena"
}
```


## Regras de Negócio

- Um automóvel só pode ser utilizado por um motorista por vez.
- Um motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo tempo.

## Como Usar

1. Clone este repositório.
```bash
  git clone git@github.com:enicio/webauto.git
```
2. Mude para o diretório
```bash
  cd webauto
```
3. Instale as dependências do projeto.
```bash
  npm install
```
4. Realize o build
```bash
  npm run build
```
5. Inicie a aplicação
```bash
  npm run start
```

6. Utilize as rotas da WebAPI conforme descrito acima para realizar as operações de cadastro, atualização, exclusão e consulta de automóveis e motoristas, bem como para registrar a utilização dos automóveis pelos motoristas.

## Executando a aplicação com  docker

Outra opção é executar a aplicação via docker.
Basta executar o comando abaixo para ocorrer o processo de build 
e ao fim a aplicação deverá esta disponivel para acesso.
```bash
docker compose up
```

## Possíveis pontos de melhoria

1. Escritas de testes e2e para as rotas disponíveis.
2. Melhorar o tratamento de erros da aplicação no geral.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
