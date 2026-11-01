/**
 * /naiyoubutsu 解答フォーム用データ
 * 注意文・各STEPの正解はここを編集します
 *
 * answers にはそのSTEPで正解とみなす文字列を入れます（複数可）
 */
const NAIYOUBUTSU = {
  title: "はじめに",
  intro: [
    "このページは、封筒に入った謎を順番に解くための解答入力ページです。",
    "画面に指示が出るまで、次の封筒は開けないでください。",
    "答えが分かったら、表示された入力欄に入力して送信してください。",
  ],
  startLabel: "はじめる",
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
