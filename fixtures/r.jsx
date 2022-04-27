function App() {
  const printEvent = (e) => {
    console.log(e)
  }

  return (
    <div>
      <button onClick={printEvent}>Click me</button>
    </div>
  )
}
