function App() {
  const userName = "Barun"
  return (
    <h1>Hello React - Vite!. And, Welcome {userName}</h1>
  )
}

export default App

// Note
// {userName} - This is Evaluated Expression
// <h1>Hello React - Vite!. And, Welcome {if (true) userName}</h1> -- Such evaluation is not allowed.
// To understand this to to main.jsx, Exploration#5