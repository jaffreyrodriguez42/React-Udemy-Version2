import './App.css';


function App() {
	const img = "https://picsum.photos/200"; 
  return (
  	<div>
  		<h1 className="heading" contentEditable="true" spellCheck="false">My Favorite Food.</h1> {/*attributes should be in camelcase*/}
  		<div>
  			<img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oK8VZHySBRmUx8yfumUxz1U8KkxwPSAuQg&usqp=CAU" alt="bacon"/>
  			<img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFpOdV87bAeKsklcUb2AWPf6beuJjU3cB5w&usqp=CAU" alt="hotdog"/>
  			<img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKI_5VYs0UnIsfZPVLxOWVGcaNmLNn3BOuw&usqp=CAU" alt="cake"/>
  			<img src={img + "?grayscale"} alt="lorempicsum"/>  {/*you can use javascript expressions as the value of the attributes*/}
  		</div>
  	</div>
    
  );
}

export default App;
