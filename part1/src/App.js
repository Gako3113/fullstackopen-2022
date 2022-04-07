// component 定義
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      {/* component 何度も使える */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App