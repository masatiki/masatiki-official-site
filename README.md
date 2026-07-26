# Masatiki Official Site

GitHub Pagesで公開するためのMasatiki公式サイトです。

## 構成

```text
.
├── index.html
├── apps/
│   └── markn-memo.html
├── en-us/
│   ├── index.html
│   ├── apps/markn-memo.html
│   ├── privacy.html
│   └── contact.html
├── privacy.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/site.js
│   └── img/
│       ├── markn-brand-logo.png
│       └── markn-memo-icon.png
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## 公開前に確認する場所

- `privacy.html` と `en-us/privacy.html`: アプリの実装とポリシー本文の一致
- `contact.html` と `en-us/contact.html`: 問い合わせ先
- `apps/markn-memo.html`: Google Play URL、スクリーンショット
- `robots.txt` と `sitemap.xml`: 独自ドメインへ移行するときは公開URLを変更

## 英語（米国）版

- `en-us/` は米国向けに文章と見せ方を再構成した英語版です。
- 初回表示ではブラウザの優先言語を使い、日本語なら日本語版、それ以外は英語版を表示します。
- 日本語版と英語版は、各ページのナビゲーションから手動で切り替えられます。
- 手動で選んだ言語はブラウザ内に保存され、次回以降の自動判定より優先されます。
- 英語版の製品情報やプライバシーポリシーは、日本語版と内容が矛盾しないように更新します。

## 新しいアプリページの追加

1. `apps/markn-memo.html` をコピーして `apps/new-app.html` を作成します。
2. タイトル、説明、特徴、画像を差し替えます。
3. `index.html` の公開中アプリ一覧にカードを追加します。
4. `sitemap.xml` に新しいURLを追加します。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成します。
   - 例: `masatiki-official-site`
   - Publicで作成するとGitHub Pages公開が簡単です。
2. このフォルダの中身をリポジトリへアップロードします。
3. GitHubのリポジトリ画面で `Settings` を開きます。
4. 左メニューの `Pages` を開きます。
5. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
6. `Branch` を `main`、フォルダを `/root` にして `Save` します。
7. 数分待つと公開URLが表示されます。

## 独自ドメインへ移行する場合

1. ドメインを取得します。
2. GitHub Pagesの `Custom domain` にドメインを入力します。
3. DNSにGitHub Pages用のレコードを設定します。
4. リポジトリ直下に `CNAME` ファイルが自動作成されます。
5. `robots.txt` と `sitemap.xml` のURLを独自ドメインに変更します。
