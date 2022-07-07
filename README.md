# README

## Vercel: フロントエンドNext.jsのデプロイ参考
- [cf. nx.dev](https://nx.dev/guides/deploy-nextjs-to-vercel)

### Vercel設定画面
- `Build and Output Setting`を開く
- build command: `yarn nx build next --prod`
- output directory: `dist/apps/next/.next`

## Herokuデプロイの参考

- [Article URL](https://dev.to/ihaback/deploy-a-fullstack-nx-workspace-on-heroku-3mhk)
- [GitHub](https://github.com/ihaback/nx-fullstack)

```shell
yarn create nx-workspace --package-manager=yarn nx-fullstack
nx generate @nrwl/node:application api

yarn nx run-many --target=serve --projects=nx-fullstack,api --parallel=true

# 非常に重要: Update apps/api/src/main.ts

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

### チュートリアルのメモ

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

### プロジェクトのリネーム

- [NX workspace, how to change an Angular app name with the the cli?](https://stackoverflow.com/questions/64987978/nx-workspace-how-to-change-an-angular-app-name-with-the-the-cli)

```shell
nx g @nrwl/workspace:move --project oldNG newNG
nx g mv --project oldNG newN
```

## fastify, prisma

- `apps/fastify`に移動
- `npx prisma init`
  - `apps/fastify/prisma`に`schema.prisma`が生成される
- `schema.prisma`を編集
- `npx prisma migrate dev --name init`を実行
- `apps/fastify/.env.sample`をコピーして`.env`を作る
  - TODO: ルートディレクトリにまとめられないか確認
- `npx prisma migrate dev --name init`
  - TODO: `workspace.json`にタスクとして登録したい
- seedを入れたい場合は次のように進める
  - `package.json`に`"type": "module"`を設定 
  - `NODE_OPTIONS="--loader ts-node/esm" node prisma/seed.ts`を実行

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

## heroku memo
### JavaScriptでの単純なexpress serverのデプロイ
- [参考](https://gist.github.com/9sako6/50fbb501ccd64b2b77c1fe2b00086b71)
#### `TypeScript`版
- `yarn add -D typescript @type/node`
- 適当に`server.ts`などを作る: `index.js`のコピペそのままで可
- `package.json`の`scripts`に追記

```json
{
  "scripts": {
    "build": "tsc --build",
    "clean": "tsc --build --clean",
    "start": "yarn build; node dist/server.js"
  }
}
```

- `tsconfig.json`を作って次のように書く

```json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "noEmitOnError": true,
    "removeComments": false,
    "sourceMap": true,
    "target": "es5",
    "outDir": "dist"
  },
  "include": [
    "**/*"
  ]
}
```

- `Procfile`を`web: yarn start`に修正
- ローカルで`yarn start`してからAPIにアクセスして正しく値が返ってくるか確認
- herokuにデプロイ
