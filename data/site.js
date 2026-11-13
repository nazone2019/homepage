/**
 * サイト全体の共通設定
 * ヘッダー、フッター、SNS、基本情報はここを編集します
 */
const SITE = {
  name: "NAZONE",
  tagline: "ココロざす を 志す",
  description:
    "謎解き制作団体「NAZONE」の公式ホームページです。思わず夢中になってしまうようなワクワクを、ぎゅぎゅっと詰め込んでお届けします。",
  founded: "2019年6月",
  copyright: "©2019 NAZONE All Rights Reserved.",
  twitter: "https://twitter.com/nazone2019",
  // 公開後のサイトURL（末尾スラッシュなし）。OGP画像の絶対URL生成に使います
  // 例: "https://example.com"
  publicOrigin: "",
  hero: {
    line1: "謎解き制作集団",
    line2: "ココロざす を 志す",
  },
  nav: [
    { label: "Home", jp: "ホーム", href: "index.html" },
    { label: "About", jp: "NAZONEって？", href: "about.html" },
    { label: "Works", jp: "制作した公演", href: "works.html" },
    { label: "Goods", jp: "制作したグッズ", href: "goods.html" },
    { label: "Contact", jp: "お問い合わせ", href: "contact.html" },
  ],
};
