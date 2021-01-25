import logo from './logo.svg';
import './App.css';

function App() {
	const name = "Jaff";
	
	const d = new Date();
	const year = d.getFullYear();
  return (
  	<div>
  		<p>Created by {name}.</p>
		<p>Copyright {year}.</p>
  	</div>
    
  );
}

export default App;
