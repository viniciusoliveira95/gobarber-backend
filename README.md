# fitdance-api-materials

* [Ambiente](#development-environment)

-----

## Ambiente

#### Desenvolvimento

** É necessário o `node` na versão `12` (recomendo instalar utilizando o `NVM`)

** É necessário banco postgres (recomendo utilizar `docker`)
   OBS: modifique o arquivo `ormconfig.json` de acordo com o banco de dados criado

Para iniciar o ambiente de desenvolvimento, começaremos pelas instalação das dependências do projeto.
Utilizaremos o `yarn` como gerenciador de dependências, porém, o `npm` também poderá ser utilizado.

Instalando o typescript
```
yarn global add typescript
```

Instalando as dependências do projeto


```
yarn install
```

Após executar a instalação das dependências do projeto, será necessário instalar, manualmente, a lib do postgres

```

yarn global add pg
```

Para iniciar o projeto, será preciso estar com o banco de dados (postgres) levantado e executar o seguinte comando:
```
yarn dev:server
```

Ao iniciar o projeto será levantado na porta `3333`
