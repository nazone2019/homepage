# NAZONEHP

NAZONEの公式HPです。[nazone-web.studio.site](https://nazone-web.studio.site/) を参考にした静的版です。

## 開き方

`index.html` をブラウザで開くか、ターミナルで:

```bash
cd ~/Desktop/NAZONEHP
python3 -m http.server 8080
```

→ http://localhost:8080

## 管理のしかた（ここだけ見ればOK）

| やりたいこと | 編集するファイル |
|---|---|
| 作品の追加・修正 | `data/works.js` + `assets/works/` に画像 |
| メンバーの追加・修正 | `data/members.js` + `assets/members/` に画像 |
| 団体紹介 | `data/about.js` |
| お問い合わせ文言・送信先 | `data/contact.js` |
| サイト名・ナビ・SNS | `data/site.js` |
| プライバシーポリシー | `data/privacy.js` |
| 色・余白・フォント | `css/style.css` の `:root` |

ヘッダー／フッターは `js/main.js` が全ページに自動挿入します。HTMLをページごとに直す必要はありません。

### 作品の追加例

1. 画像を `assets/works/my-work.jpg` に置く  
2. `data/works.js` の `WORKS` 配列に追加:

```js
{
  id: "my-work",
  title: "作品名",
  date: "2026/7/10",
  year: 2026,
  image: "my-work.jpg",
  about: "説明文",
  featured: false, // true にするとトップに大きく表示
},
```

`listed: false` を付けると CONTENTS 一覧には出さず、詳細URLだけ使えます。

## ページ構成

- `index.html` … トップ（ヒーロー＋Works＋導線）
- `about.html` … 団体紹介
- `contents.html` … Works 一覧（年フィルター付き）
- `work.html?id=...` … 作品詳細
- `member.html` … メンバー
- `contact.html` … お問い合わせ（mailto）
- `privacy.html` … プライバシーポリシー

## イントロ演出（トップのみ）

初回アクセス時:
1. ローディング画面
2. 緑の炭酸リキッドが下から上昇
3. メイン画面が出現

同じタブでは2回目以降スキップされます。もう一度見るときは:

```
index.html?intro=1
```

## 補足

- 一部の古い作品はポスター画像が未取得のため、タイトル入りのプレースホルダー表示になります。画像を `assets/works/` に追加し、`data/works.js` の `image` を書けば差し替えできます。
- お問い合わせはサーバー不要の mailto 方式です。フォームサービスに切り替えたい場合は相談ください。
