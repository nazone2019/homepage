/**
 * サイト全体の共通設定
 * ヘッダー、フッター、SNS、基本情報はここを編集します
 */
const SITE = {
  name: "NAZONE",
  tagline: "ココロざす を 志す",
  description: "全国の大学生が集まってできた謎解き制作集団",
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
    { label: "About", jp: "NAZONEとは", href: "about.html" },
    { label: "Works", jp: "制作したもの", href: "contents.html" },
    { label: "Goods", jp: "グッズ", href: "goods.html" },
    { label: "Member", jp: "メンバー", href: "member.html" },
    { label: "Contact", jp: "お問い合わせ", href: "contact.html" },
  ],
};
