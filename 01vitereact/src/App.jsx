function App() {

  const username = "abuzarkhase"

  return (

    // The empty components is called React Fragment this is used for group and multiple element.
    // This is because of JSX you must return a single parent element.

    // {} use for variable syantax mean it will be treat a variable

    <>
    <h3>Abuzar Khan with vite | Chai our Code by {username}</h3>
    {/* {username} = this is evaluated expression final output! we should write it ae it as*/}
    <p>Test Para</p>
    </>
  )
}

export default App