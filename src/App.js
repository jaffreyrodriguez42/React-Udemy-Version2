import './App.css';


function App() {
  const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
  } 

  customStyle.color = "blue";

  return (
    <h1 style={customStyle}>Hello World!!</h1>
    
  );
}

export default App;
