# NAZONEHP

NAZONEの公式HPです。

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
| 公演一覧のフィルタ・タグ・並び | `js/catalog.js` の `DRAFT_WORKS` |
| グッズ一覧のフィルタ・タグ・並び | `js/catalog.js` の `DRAFT_GOODS` |
| 公演詳細文 | `data/works.js` + `assets/works/` に画像 |
| グッズ詳細文・購入/プレイリンク | `data/goods.js` + `assets/goods/` に画像 |
| 団体紹介（About本文） | `about.html`（必要なら `data/about.js`） |
| お問い合わせ文言・送信先 | `contact.html` / `data/contact.js` |
| プライバシーポリシー | `data/privacy.js` |
| 色・余白・フォント | `css/mock.css` |
| /naiyoubutsu の注意文・各STEPの正解 | `data/naiyoubutsu.js` |
| /hint のヒント文 | `data/hint.js` |

### 作品の追加例

1. 画像を `assets/works/my-work.jpg` に置く  
2. `data/works.js` に詳細データを追加  
3. `js/catalog.js` の `DRAFT_WORKS` に一覧用エントリを追加（`filter` / `tag` / `image`）

`listed: false` を `data/works.js` に付けると一覧には出さず、詳細URLだけ使えます。

## ページ構成

- `index.html` … トップ
- `about.html` … NAZONEって？
- `works.html` … 制作した公演
- `work.html?id=...` … 公演詳細
- `goods.html` … 制作したグッズ
- `good.html?id=...` … グッズ詳細
- `contact.html` … お問い合わせ（SSGform）
- `contact-thanks.html` … 送信完了
- `privacy.html` … プライバシーポリシー
- `contents.html` … `works.html` へのリダイレクト（旧URL互換）
- `member.html` … `about.html` へのリダイレクト（旧URL互換）
- `share/naiyoubutsu-clear/` … クリア投稿用URL（Goods詳細へリダイレクト）
- `/naiyoubutsu` … 解答入力
- `/hint` … ヒント

## 補足

- お問い合わせは SSGform 送信です。管理画面の転送先に `contact-thanks.html` を設定してください。
- 旧デザイン用の `css/app.css` / `js/main.js` は `/naiyoubutsu`・`/hint` などで引き続き使います。
- 作業用ドラフトは `nz-p-dc69d91ff047/` に残しています（公開ルートではありません）。
