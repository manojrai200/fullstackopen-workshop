const App = () => {
  let arr = [1, 2, 3, 4, 5];
  return(
    <>
      {arr.map(ele => <h1>{ele}</h1>)}
    </>
  )
}

export default App