// 实现图片懒加载

// 方法一：使用 IntersectionObserver

function lazyLoad() {
  const imgs = document.querySelectorAll('img');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  imgs.forEach(img => observer.observe(img));
}

// 方法二：使用 getBoundingClientRect

function lazyLoad() {
  const imgs = document.querySelectorAll('img');
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const lazyLoad = function () {
    imgs.forEach(img => {
      const rect = img.getBoundingClientRect(); // 获取元素相对于视口的位置
      if (rect.top < viewHeight) {
        img.src = img.dataset.src;
      }
    });
  };
  lazyLoad();
  window.addEventListener('scroll', lazyLoad);
}
