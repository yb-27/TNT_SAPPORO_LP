// document.addEventListener("DOMContentLoaded", function () {
//   // モーダルを開くラベル要素を取得
//   const label = document.getElementById('howto-label');
//   // モーダルを閉開するチェックボックス要素を取得
//   const checkbox = document.getElementById('modal-trigger-howto');

//   // ラベルに Enter キーでの操作を追加（キーボード操作対応）
//   label.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       // Enter キーが押されたら、チェックボックスの状態を切り替え
//       checkbox.checked = !checkbox.checked;
//       e.preventDefault(); // デフォルト動作（フォーム送信など）を防止
//     }
//   });

//   // モーダルの「閉じる」ボタン要素を取得
//   const labelClose = document.querySelector('.modal-area__howto-close');

//   // 閉じるボタンに Enter または Space キーでの操作を追加（アクセシビリティ対応）
//   labelClose.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault(); // スクロールなどのデフォルト動作を防止
//       labelClose.click(); // ボタンのクリックイベントをトリガー
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const labelHowto = document.getElementById("howto-label");
  const checkboxHowto = document.getElementById("modal-trigger-howto");
  const closeHowto = document.querySelector(".modal-area__howto-close");
  const overlayHowto = document.getElementById("howto-overlay");

  // Enterキーで開く
  labelHowto.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkboxHowto.checked = !checkboxHowto.checked;
    }
  });

  // ✖ キー操作で閉じる
  closeHowto.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkboxHowto.checked = false;
    }
  });

  // 背景クリックでも閉じる
  overlayHowto.addEventListener("click", function (e) {
    if (e.target === overlayHowto) {
      checkboxHowto.checked = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const labelMembers = document.getElementById("members-label");
  const checkboxMembers = document.getElementById("modal-trigger-members");
  const closeMembers = document.querySelector(".modal-area__members-close");
  const overlayMembers = document.getElementById("members-overlay");

  // Enterキーで開く
  labelMembers.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkboxMembers.checked = !checkboxMembers.checked;
    }
  });

  // ✖ キー操作で閉じる
  closeMembers.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkboxMembers.checked = false;
    }
  });

  // 背景クリックで閉じる
  overlayMembers.addEventListener("click", function (e) {
    if (e.target === overlayMembers) {
      checkboxMembers.checked = false;
    }
  });
});
