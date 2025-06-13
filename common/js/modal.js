document.addEventListener("DOMContentLoaded", function () {
  // モーダルを開くラベル要素を取得
  const label = document.getElementById('howto-label');
  // モーダルを閉開するチェックボックス要素を取得
  const checkbox = document.getElementById('modal-trigger-howto');

  // ラベルに Enter キーでの操作を追加（キーボード操作対応）
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // Enter キーが押されたら、チェックボックスの状態を切り替え
      checkbox.checked = !checkbox.checked;
      e.preventDefault(); // デフォルト動作（フォーム送信など）を防止
    }
  });

  // モーダルの「閉じる」ボタン要素を取得
  const labelClose = document.querySelector('.modal-area__howto-close');

  // 閉じるボタンに Enter または Space キーでの操作を追加（アクセシビリティ対応）
  labelClose.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // スクロールなどのデフォルト動作を防止
      labelClose.click(); // ボタンのクリックイベントをトリガー
    }
  });
});
