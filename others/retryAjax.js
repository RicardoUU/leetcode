function retryAjax(url, options = {}) {
  // 默认设置
  const maxRetries = options.maxRetries || 3;  // 最大重试次数
  const delay = options.delay || 1000;  // 每次重试的延时，单位为毫秒
  const method = options.method || 'GET';  // 请求方法，默认为 GET
  const headers = options.headers || {};  // 请求头
  const data = options.data || null;  // 请求体，默认为 null

  let retries = 0;  // 当前重试次数

  // 创建一个新的 Promise，来处理请求的逻辑
  return new Promise((resolve, reject) => {
    // 发起 AJAX 请求的函数
    function attemptRequest() {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      // 设置请求头
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      // 监听请求完成事件
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          // 请求成功，返回响应数据
          resolve(xhr.responseText);
        } else {
          // 请求失败，检查是否需要重试
          if (retries < maxRetries) {
            retries++;
            console.log(`请求失败，正在重试第 ${retries} 次...`);
            setTimeout(attemptRequest, delay);  // 延迟后重试
          } else {
            reject(`请求失败，已尝试 ${maxRetries} 次，最终失败。`);
          }
        }
      };

      xhr.onerror = function() {
        // 网络错误时也可以进行重试
        if (retries < maxRetries) {
          retries++;
          console.log(`请求失败，正在重试第 ${retries} 次...`);
          setTimeout(attemptRequest, delay);
        } else {
          reject(`请求失败，已尝试 ${maxRetries} 次，最终失败。`);
        }
      };

      // 发送请求
      xhr.send(data);
    }

    // 启动第一次请求
    attemptRequest();
  });
}