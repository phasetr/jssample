# README

## Storybook
```shell
nx g @nrwl/react:storybook-configuration --name=ui
```

## prisma
- [cf. prismaをlibsに入れる](https://medium.com/swlh/nx-model-with-prisma-68ad1bf90379)
- [seeding](https://www.prisma.io/docs/guides/database/seed-database)
- [seedのエラー対応](https://stackoverflow.com/questions/71807996/prisma-db-seed-typescript-problem-with-import-and-typemodule)

```shell
nx run prisma:init
# .envをトップに移動して修正
nx run prisma:migrate 
nx run prisma:seed
```

- TODO: 上記`seed`（または適切な`deploy`?）への注意
    - 次の直接実行で無理やり実行できた
    - `heroku run bash`
    - `libs/prisma`で`npx prisma db seed`実行
    - 当面は最悪これで実行

- コマンドラインで`node --loader ts-node/esm libs/prisma/prisma/seed.ts`を打つと通る
- expressの`main.js`でポートの変数を`process.env.port`から`process.env.PORT`と大文字に変更する
- `Procfile`に`release: npx prisma migrate deploy`を追記する
- `package.json`に次の内容を追記する

```json
{
  "prisma": {
    "schema": "libs/prisma/prisma/schema.prisma"
  }
}
```

- 次のコマンドを実行する

```shell
heroku addons:create heroku-postgresql:hobby-dev
```

### cf. command test
```shell
# libs/ui/prisma/project.jsonにコマンド設定する
nx run prisma:ls
```

### prisma
```shell
nx run prisma:init
# 出力されたファイルをルートに移動
```

### API setting
```shell
heroku create -a ys-nx-express-prisma
heroku config:set -a ys-nx-express-prisma PROJECT_NAME=express
heroku config:set -a ys-nx-express-prisma PORT=80

heroku buildpacks:add -a ys-nx-express-prisma heroku/nodejs
```

## command
```shell
yarn create nx-workspace --package-manager=yarn heroku-nx
```

## Frontend deploy: Vercel
- [cf](https://nx.dev/guides/deploy-nextjs-to-vercel)
### Vercel設定画面
- `Build and Output Setting`を開く
- build command: yarn nx build next --prod
- output directory: dist/apps/next/.next

## Nest.jsへのメモ
- [参考](https://zenn.dev/devgeeeen/articles/125a076f81b0df)
- うまく動かないので`fastify`ではなく素の`express`利用

```shell
yarn prisma migrate dev --preview-feature
yarn prisma generate

nest g resource
```

### deploy
```shell
heroku addons:create heroku-postgresql:hobby-dev

# Procfileに`release: npx prisma migrate deply`追加
```

## バックエンドの設定
```shell
heroku create -a ys-jssamples-api
heroku config:set -a ys-jssamples-api PORT=80
heroku buildpacks:add -a ys-jssamples-api heroku/nodejs
```

## Vercel: フロントエンドNext.jsのデプロイ参考
- [cf. nx.dev](https://nx.dev/guides/deploy-nextjs-to-vercel)

### Vercel設定画面
- `Build and Output Setting`を開く
- build command: `yarn nx build next --prod`
- output directory: `dist/apps/next/.next`

## Herokuデプロイの参考

- [Article URL](https://dev.to/ihaback/deploy-a-fullstack-nx-workspace-on-heroku-3mhk)
- [GitHub](https://github.com/ihaback/nx-fullstack)
- [Prisma in Heroku](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku)

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

### `main.ts`への設定
- `port`だけではなく`host`も設定する

```javascript
app.listen(
  {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0', // ここも入れる
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);

```

### prisma

- `npx prisma studio`で`localhost:5555`にブラウザが起動する

### Fastify+PrismaでJWT認証付きREST-APIサーバーを作る
- [URL](https://zenn.dev/kanahiro/scraps/51d072103a9c68)

## heroku memo
### nx+React+Fastify
- [参考](https://dev.to/ihaback/deploy-a-fullstack-nx-workspace-on-heroku-3mhk)
- 結論: 採用しない
- `fastify`のルートに`React`を連携させる
- フロントエンドとバックエンドを分けずに一体でリリースする
- `Next`だと使えなさそう
### yarn+prisma
- 次のコマンドで初期化する

```
yarn init
yarn add @prisma/client
yarn add -D @types/node prisma ts-node typescript
```

```
# tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": [
      "esnext"
    ],
    "esModuleInterop": true
  }
}
```

- `index.ts`を作る

```
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = {
  data: {
    name: "Alice",
    email: "alice@prisma.io",
    posts: { create: { title: "Hello World" } },
    profile: { create: { bio: "I like turtles" } },
  },
};

async function main() {
  // await prisma.user.create(userData);
  const allUsers = await prisma.user.findMany({
    include: { posts: true, profile: true },
  });
  console.log(allUsers, { depth: null });

  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(post);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

```
# package.json
  "scripts": {
    "dev": "npx ts-node index.ts",
    "start": "npx ts-node index.ts"
  }
```

```
# Procfile
web: yarn start
```

- 次のコマンドで`prisma`を初期化

```
npx prisma init
```

- `prisma/schema.prisma`を次のように設定する

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

- 次のコマンドを発行する

```
npx prisma migrate dev --name init
```

### yarn+express+typescript
```
yarn add express
yarn add -D @types/node typescript
```
#### `server.ts`
```
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", function (request, response) {
  response.send("Hello World! from TypeScript\n");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
```
#### `tsconfig.json`
```
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
#### `package.json`
```json
{
  "name": "heroku-express",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.1"
  },
  "scripts": {
    "build": "tsc --build",
    "clean": "tsc --build --clean",
    "start": "yarn build; node dist/server.js"
  },
  "devDependencies": {
    "@types/node": "^18.0.3",
    "typescript": "^4.7.4"
  }
}
```
#### `Procfile`
```
web: yarn start
```
### yarn+Next
- [参考: create-next-appでNext.jsとTypeScript環境を構築](https://mo-gu-mo-gu.com/create-next-app-typescript/)

```shell
npx create-next-app heroku-next --typescript
# 適当にページ追加・編集

# ローカルでのチェック
yarn dev # 正しくページが表示されるか確認
yarn build; yarn start # Procfileに書く内容の確認
# 標準のlocalhost:3000でページが表示されるか確認

# Procfileを`web: yarn build; yarn start`で作成
heroku create
git push heroku master
```
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
