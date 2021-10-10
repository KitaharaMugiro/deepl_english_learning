# TypeScript-Next.js-template
いつでもTypeScript + Next.jsでプロジェクトを開始できるようにするためのテンプレートです。

# 使い方
npxが使用できる環境で、以下のコマンドを実行する。

```
npx degit https://github.com/KitaharaMugiro/TypeScript-Next.js-template <Directory Name>
```

デモページを表示するには以下のコマンドを実行
```
npm install
npm run dev
```

# 内容

- [x] Next.jsのインストール & コマンドのセットアップ
- [x] TypeScriptのインストール
- [x] デモページ
- [x] ServerlessFrameworkを利用したデプロイ
- [x] CSS Framework
- [ ] テスト環境のセットアップ
- [ ] 最低限必要なライブラリのインストール

# ServerlessFrameworkを利用したデプロイ
前提: CLIインストール済み(https://www.serverless.com/framework/docs/getting-started/)

① 以下の環境変数をセットする。

```
AWS_ACCESS_KEY_ID=accesskey
AWS_SECRET_ACCESS_KEY=sshhh
```

② コマンド`serverless`でデプロイする

# React Shardsの追加
https://designrevision.com/docs/shards-react/getting-started
