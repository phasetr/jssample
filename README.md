# README

## Herokuデプロイの参考

- [Article URL](https://dev.to/ihaback/deploy-a-fullstack-nx-workspace-on-heroku-3mhk)
- [GitHub](https://github.com/ihaback/nx-fullstack)

```shell
yarn create nx-workspace --package-manager=yarn nx-fullstack
nx generate @nrwl/node:application api
yarn nx run-many --target=serve --projects=nx-fullstack,api --parallel=true

# Update apps/api/src/main.ts

# Update build script in package.json and commit it to git
"build": "yarn nx run-many --target=build --projects=nx-fullstack,api --parallel=true"

# Update start script in package.json and commit it to git
"start": "node dist/apps/api/main.js"

heroku login
heroku create

# Procfile in the root of your project
web: yarn start

# Deploy code to Heroku
git push heroku master

# Visit your deployed fullstack app
heroku open
```

## アプリケーション起動コマンド

```shell
nx serve <proj-name>
nx serve jssample
```

## コマンドメモ

- [Tutorial movies](https://egghead.io/lessons/javascript-install-and-use-external-npm-packages-in-an-nx-workspace)
- [GitHub](https://github.com/juristr/egghead-scale-react-dev-with-nx/)
- [nx.dev, nx-cli](https://nx.dev/using-nx/nx-cli)

```shell
npx create-nx-workspace my-project

yarn nx list # we can confirm options
yarn add @nrwl/react
yarn nx list @nrwl/react # check schematics
yarn nx g @nrwl/react:application --help # confirm options
yarn nx g @nrwl/react:application store --dry-run
yarn nx g @nrwl/react:application store

# For command, see VSCode extension, nx-console

yarn nx run <proj>:<target>
yarn nx run store:serve
yarn nx run store:serve --port 3000 # we can set port in workspace.json
yarn nx run store:lint
nx serve store

yarn nx run store:serve # run react in tutorial
yarn add @mui/material

yarn nx g @nrwl/react:lib ui-shared --directory=store --dry-run
yarn nx g @nrwl/react:lib ui-shared --directory=store
yarn nx g @nrwl/react:component header --project=store-ui-shared

yarn nx g @nrwl/workspace:lib util-formatters --directory=store --dry-run
yarn nx g @nrwl/workspace:lib util-formatters --directory=store

yarn nx graph

yarn nx @nrwl/react:lib feature-game-detail --directory=store --appProject=store

yarn add -D @nrwl/express # 公式ページから調べて適切なコマンドを実行
yarn nx g @nrwl/express:application api --frontendProject=store --dry-run
yarn nx g @nrwl/express:application api --frontendProject=store
yarn nx run api:serve
yarn nx dep

yarn nx run-many --target=serve --projects=api,store --parallel=true
# workspace.jsonに適切に追記
yarn nx run store:serveAppAndApi

yarn nx dep

yarn nx g @nrwl/workspace:lib util-interfaces --directory=api --dry-run
yarn nx g @nrwl/workspace:lib util-interfaces --directory=api

yarn add @nrwl/storybook -D
yarn nx list @nrwl/storybook
yarn nx g @nrwl/react:storybook-configuration store-ui-shared --configureCypress --generateStories --dry-run
yarn nx g @nrwl/react:storybook-configuration store-ui-shared --configureCypress --generateStories
yarn nx run store-ui-shared:storybook

yarn nx run store-ui-shared-e2e:e2e --watch
yarn nx run store-ui-shared-e2e:e2e --headless

yarn nx run store:test
yarn nx run store:test --watch

yarn nx run store:build --configuration=production

yarn nx run store:lint

yarn nx affected:dep-graph --base=<branch-name>
yarn nx affected:test --base=<branch-name>
yarn nx affected:lint --base=<branch-name>

yarn nx affected:test --all
# affetedのキャッシュはnode_modules/.cache

yarn nx migrate latest

nx run my-js-app:build
nx build my-js-app
nx run-many --target=build --projects=app1,app2
nx run-many --target=test --all # Runs all projects that have a test target, use this sparingly.
nx affected --target=build# 毎回すべてのプロジェクトを実行するよりも効率的
nx generate workspace-generator my-generator # ワークスペース用のカスタムジェネレーター
nx migrate latest # Updates the version of Nx in `package.json` and schedules migrations to be run
nx migrate --run-migrations # Runs the migrations scheduled by the previous command.
nx graph
nx graph --watch # Updates the browser as code is changed
nx affected:graph # Highlights projects which may have changed in behavior
nx list
nx list @nrwl/react # Lists capabilities in the @nrwl/react plugin
```

### UIライブラリ追加

```
# Generate UI lib
nx g @nrwl/react:lib ui
# Add a component
nx g @nrwl/react:component button --project ui
```

### プロジェクト削除

- [参考](https://github.com/nrwl/nx/issues/333#issuecomment-605903501)

```
nx g @nrwl/workspace:rm <project name>
```

## fastify, prisma

- `apps/fastify`に移動
- `npx prisma init`
  - `apps/fastify/prisma`に`schema.prisma`が生成される
- `schema.prisma`を編集
- `npx prisma migra dev --name init`を実行
- `apps/fastify/.env.sample`をコピーして`.env`を作る
  - TODO: ルートディレクトリにまとめられないか確認
- `npx prisma migrate dev --name init`
  - TODO: `workspace.json`にタスクとして登録したい
- seedを入れたい場合は`NODE_OPTIONS="--loader ts-node/esm" prisma/seed.ts`を実行する

### TODO

- `package.json`に次を設定したい

```json
{
  "prisma": {
    "seed": "NODE_OPTIONS=\"--loader ts-node/esm\" node apps/fastify/prisma/seed.ts"
  }
}
```

### prisma

- `npx prisma studio`で`localhost:5555`にブラウザが起動する

# Jssamples

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects
as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@jssamples/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use
the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that
are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s
advanced code generation and project dependency graph, plus a unified experience for both frontend and backend
developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
