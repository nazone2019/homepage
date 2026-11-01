/**
 * /naiyoubutsu 解答フォーム用データ
 * 注意文・内容物・各STEPの正解はここを編集します
 *
 * answers にはそのSTEPで正解とみなす文字列を入れます（複数可）
 */
const NAIYOUBUTSU = {
  title: "はじめに",
  thanks:
    "この度は、『まずは内容物一覧をご確認ください！』のご購入、誠にありがとうございます。",
  contentsTitle: "内容物",
  contents: [],
  notesTitle: "注意事項",
  notes: [
    "内容のネタバレに繋がる行為はお控えください。",
    "本キットの転売は固く禁止いたします。",
  ],
  hintLabel: "ヒント",
  startLabel: "始める",
  correctMessage: "正解",
  wrongMessage: "間違っているようです。",
  steps: [
    {
      open: "STEP1の封筒を開けてください",
      question: "STEP1：アンサーシートに書かれた謎の答えは？",
      answers: ["うつりかわり"],
    },
    {
      open: "STEP2の封筒を開けてください",
      question: "STEP2：導きの紙に書かれた謎の答えは？",
      answers: ["いとでんわ"],
    },
    {
      open: "STEP3の封筒を開けてください",
      question: "STEP3：アンサーシートに書かれた謎の答えは？",
      answers: ["きーぱー"],
    },
    {
      open: "STEP4の封筒を開けてください",
      question: "STEP4：なぞのかみに書かれた謎の答えは？",
      answers: ["せんすいかん"],
    },
    {
      open: "STEP5の封筒を開けてください",
      question: "STEP5：お仕事カードに書かれた謎の答えは？",
      answers: ["とまと"],
    },
    {
      open: "STEP6の封筒を開けてください",
      question: "STEP6：アンサーシートに書かれた謎の答えは？",
      answers: ["はーど"],
    },
    {
      open: "STEP7の封筒を開けてください",
      question: "STEP7：第一章の答えは？",
      answers: ["なんきょく"],
    },
    {
      open: "STEP8の封筒を開けてください",
      question: "STEP8：指示書に書かれた謎の答えは？",
      answers: ["せんばづる"],
    },
    {
      open: "STEP9の封筒を開けてください",
      question: "STEP9：ストーリーシートに書かれた謎の答えは？",
      answers: ["じょーかー"],
    },
    {
      open: "STEP10の封筒を開けてください",
      question: "STEP10：謎の紙に書かれた謎の答えは？",
      answers: ["せかい"],
    },
  ],
};
