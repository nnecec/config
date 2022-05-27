export function App() {
  const printEvent = e => {
    console.log(e)
  }

  return (
    <div>
      <button onClick={printEvent}>Click me</button>
      <a href="www.baidu.com">baidu</a>
    </div>
  )
}
