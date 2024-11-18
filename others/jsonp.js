// jsonp实现

function jsonp(url, params = {}, callbackName = 'callback') {
  return new Promise((resolve, reject) => {
      // 生成唯一的回调函数名
      const callback = `jsonpCallback_${Date.now()}_${Math.random().toString(36).substr(2)}`;
      params[callbackName] = callback; // 将回调函数名加入参数

      // 将参数对象转换为查询字符串
      const query = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join('&');

      // 动态创建 script 标签
      const script = document.createElement('script');
      script.src = `${url}?${query}`;

      // 定义全局回调函数
      window[callback] = function(data) {
          resolve(data); // 返回数据
          delete window[callback]; // 清理全局回调函数
          document.body.removeChild(script); // 删除 script 标签
      };

      // 处理加载失败的情况
      script.onerror = function() {
          reject(new Error('JSONP request failed'));
          delete window[callback];
          document.body.removeChild(script);
      };

      // 添加 script 标签到页面
      document.body.appendChild(script);
  });
}

function jsonp2(url, params = {}, callbackName = 'callback') {
  return new Promise((resolve, reject) => {
      // 生成唯一的回调函数名
      const callback = `jsonpCallback_${Date.now()}_${Math.random().toString(36).substr(2)}`;
      params[callbackName] = callback; // 将回调函数名加入参数

      // 将参数对象转换为查询字符串
      const query = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join('&');

      // 动态创建 script 标签
      const script = document.createElement('script');
      script.src = `${url}?${query}`;

      // 定义全局回调函数
      window[callback] = function(data) {
          resolve(data); // 返回数据
          delete window[callback]; // 清理全局回调函数
          document.body.removeChild(script); // 删除 script 标签
      };

      // 处理加载失败的情况
      script.onerror = function() {
          reject(new Error('JSONP request failed'));
          delete window[callback];
          document.body.removeChild(script);
      };

      // 添加 script 标签到页面
      document.body.appendChild(script);
  });
}