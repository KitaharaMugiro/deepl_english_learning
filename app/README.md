# Englister

## ローカル開発
.development.envを開き、TARGET_APIを編集する。
* TARGET_API=local : ローカルのAPIサーバ(localhost:8080)を使用する
* TARGET_API=production : AWS API Gatewayを使用する

以下コマンドで開発サーバを起動する。

```
npm run dev
```

# GraphQLの自動生成

## GraphQLファイルの作成
`app/api/gql/`配下に、使用したいGraphQLのクエリを作成する。

## JWTの設定
ログインした状態で`http://localhost:3000/dev/jwt`にアクセスし、表示されたJWTをコピーする。

`app/secrets.json`を新規作成し、以下の内容で記述する。

```
{
    "JWT": "コピーしたJWT"
}
```

## GraphQLファイルの自動生成
app配下で以下を実行すると、GraphQLファイルが自動生成される。

```
npm run generate
```

ここでエラーが起きた際に考えられる原因は、以下が考えられるので相談する。
* そのクエリが存在しない(アクセス権を誰にも与えていない)
* GraphQLの文法が間違っている
* 実行する権限がない
* カレントディレクトリがappでない
* JWTが古い

# AWSへのデプロイ
```
npm run deploy
```

# Hasura url
https://adequate-guinea-56.hasura.app

## Amplify周り
```
amplify update auth
```
