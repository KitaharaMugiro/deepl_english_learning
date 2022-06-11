# Englister

## デプロイ

```
export AWS_PROFILE=personal
npm run deploy
```


## ローカル開発
.development.envを開き、TARGET_APIを編集する。
* TARGET_API=local : ローカルのAPIサーバ(localhost:8080)を使用する
* TARGET_API=production : AWS API Gatewayを使用する

以下コマンドで開発サーバを起動する。

```
npm run dev
```


# Hasura url
https://adequate-guinea-56.hasura.app

## Amplify周り
```
amplify update auth
```