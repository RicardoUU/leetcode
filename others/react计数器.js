// 实现react计数器组件
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Counter() { 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>计数器</h1>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById('root'));
// 在 HTML 文件中需要有一个 id 为 root 的元素
// <div id="root"></div>
// 注意：确保在使用 React 和 ReactDOM 之前已经引入了相应的库
// <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
// 你可以在本地创建一个 HTML 文件，并将上述代码放入其中，然后在浏览器中打开该文件来查看计数器组件的效果。
// 这个计数器组件使用了 React 的 useState 钩子来管理状态，包含三个按钮：增加、减少和重置计数。每次点击按钮都会更新计数状态，并重新渲染组件以显示最新的计数值。
// 你可以根据需要进一步扩展这个组件，比如添加样式、动画效果等。