function get (source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.') // 将路径转换为数组, e.g. 'a.b.c' => ['a', 'b', 'c'], $1表示第一个括号匹配的内容
  let result = source
  for (const p of paths) {
    result = Object(result)[p]
    if (result === undefined) {
      return defaultValue
    }
  }
  return result
}
