function getUrlParams(url) {
  // 创建一个 URL 对象
  const urlObj = new URL(url);

  // 创建一个 URLSearchParams 对象，用于处理查询字符串
  const params = new URLSearchParams(urlObj.search);
  console.log(params);
  // 初始化一个空对象，用于存储参数
  const result = {};

  // 使用 for...of 循环遍历参数并将其添加到结果对象中
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
}

// 正则表达式版本
function getUrlParamsReg(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }

  return JSON.parse(
    '{"' +
    decodeURI(search) // 解码 URL 编码的字符串
      .replace(/"/g, '\\"') // 将双引号转义为转义字符, 防止 JSON.parse 时出错
      .replace(/&/g, '","') // 将 & 转义为逗号
      .replace(/=/g, '":"') + // 将 = 转义为冒号
    '"}'
  );
}




// 示例用法
const url = 'https://example.com/?name=JohnDoe&age=25&city=NewYork';
const params = getUrlParams(url);
console.log(params);

const paramsReg = getUrlParamsReg(url);
console.log(paramsReg);