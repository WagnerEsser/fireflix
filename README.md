[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![image](https://user-images.githubusercontent.com/17770639/112569326-bf71a500-8dc2-11eb-8121-4792e988b93b.png)

# Fireflix

Curso disponibilizado pelo Alura, realizado com ReactJS e styled-components.

### Como rodar o projeto

Clone o projeto e execute na pasta:

```
npm install
npm dev
```

### Minhas Anotações do curso

* Live Share -> Plugin p/ código compartilhado
* IntelliCode -> Plugin p/ auxiliar no autocomplete
* Cypress -> Lib utilizada na maioria dos projeto React
* VSCode Styled Components -> Plugin p/ melhorar a sintaxe do CSS no JS
* editorconfig for VSCode -> Plugin p/ gerar .editorconfig
* json-server -> Lib p/ gerar um banco de dados básico em JSON
    - Criar um arquivo db.json na raiz
    - Rodar com `json-server --watch db.json`
    - Add como script: `"server": "json-server --watch db.json --port 8080"`
* concurrently -> Lib que permite rodar dois comandos que travam o terminal, em paralelo
    - Rodar com `concurrently "react-scripts start" "npm run server"`
---
[http://alura.com.br/](@Alura)
