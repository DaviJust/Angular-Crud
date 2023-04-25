Sistema de cadastro(CRUD) usando Angular

# Projeto Angular CRUD
Esse projeto contém um frontend em Angular e uma API REST em Express (backend) para demonstrar um aplicativo CRUD (Create, Read, Update, Delete) básico.

# Mostrando o site
<a href="https://loom.com/share/6f92c97cd2814e09badd0658aed8fa5f" target="_blank">
   <div align="center">
   <p>Só clicar na imagem ou nesse link</p>
   <img href="https://loom.com/share/6f92c97cd2814e09badd0658aed8fa5f" src="https://user-images.githubusercontent.com/112717111/234385937-bba28af6-e304-41a4-af9a-765195c49785.png" alt="angularCrudVideo" width="720" height="405" border="10" />
   </div>
  </a>


## Instruções

Clone este repositório
bash
git clone https://github.com/yourusername/angular-crud.git


# Instale as dependências do frontend
npm install
# Navegue até a pasta de backend e instale as dependências
npm install

# Na pasta frontend
npm start
Isso iniciára a página na porta 4200

# Na pasta backend
npm start
Isso iniciará a API na porta 3001.

## Estrutura
- ./src contém os arquivos fonte do frontend Angular
- ./backend contém os arquivos da API Rest em Express
- As solicitações do frontend para o backend são encaminhadas através de proxy.conf.json
## Rotas da API
As rotas da API incluem:
- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id
## Construído com
- [Angular](https://angular.io/) - Framework frontend
- [Express](https://expressjs.com/) - Framework backend
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
