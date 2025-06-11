document.addEventListener("DOMContentLoaded", function () {
  // 初期状態で .ac-child と .ac-child__description を非表示
  document.querySelectorAll('.ac-child').forEach(function (el) {
    el.style.display = 'none';
  });

  document.querySelectorAll('.ac-child__description').forEach(function (el) {
    el.style.display = 'none';
  });

  // .ac-parent にクリックイベントを設定
  document.querySelectorAll('.ac-parent').forEach(function (parent) {
    parent.addEventListener('click', function () {
      parent.classList.toggle('open');
      const next = parent.nextElementSibling;
      if (next && next.classList.contains('ac-child')) {
        toggleSlide(next);
      }
    });
  });

  // .ac-child__item にクリックイベントを設定
  document.querySelectorAll('.ac-child__item').forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('open');
      const next = item.nextElementSibling;
      if (next && next.classList.contains('ac-child__description')) {
        toggleSlide(next);
      }
    });
  });

  // スライドトグル関数（簡易アニメーション付き）
  function toggleSlide(element) {
    const openDuration = parseInt(element.dataset.durationOpen || '1000', 10);
    const closeDuration = parseInt(element.dataset.durationClose || '100', 10);

    if (element.style.display === 'none' || getComputedStyle(element).display === 'none') {
      element.style.display = 'block';
      element.style.height = '0px';
      element.style.overflow = 'hidden';
      const height = element.scrollHeight;

      element.animate([
        { height: '0px' },
        { height: height + 'px' }
      ], {
        duration: openDuration,
        easing: 'ease'
      }).onfinish = function () {
        element.style.height = '';
        element.style.overflow = '';
      };
    } else {
      const height = element.scrollHeight;
      element.style.overflow = 'hidden';

      element.animate([
        { height: height + 'px' },
        { height: '0px' }
      ], {
        duration: closeDuration,
        easing: 'ease'
      }).onfinish = function () {
        element.style.display = 'none';
        element.style.height = '';
        element.style.overflow = '';
      };
    }
  }

});