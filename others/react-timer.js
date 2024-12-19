// 定义
export function useInterval(callback: any, timeout = 1000) {
  const latestCallback = useRef(() => {
  });

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    const timer = setInterval(() => latestCallback.current(), timeout);
    return () => clearInterval(timer);
  }, []);
}

// 使用
useInterval(() => {
  setCount(count + 1);
  console.log(`count=${count}`);
  console.log('定时器返回timer', timer);
  if (count > 5) clearInterval(timer);
}, 1500);



// 2
const [count, setCount] = useState(10);
const latestCount = useRef(count); // 定义一个ref，初始值是10

useEffect(() => {
  latestCount.current = count;
}, [count]);

useEffect(() => {
  const timer = setInterval(() => {
    console.log(`定时器count=${latestCount.current}`);
    if (latestCount.current === 0) {
      clearInterval(timer);
      return;
    }
    setCount(c => c - 1);
  }, 1000);
}, []);

