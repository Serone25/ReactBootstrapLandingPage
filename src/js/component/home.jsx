//import React
import React from "react";

//import the components
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//import the images --->we use the "import name" to use it in the component
import cardImage from "../../img/perro.jpg"
import cardImage2 from "../../img/rigo-baby.jpg"

//create the global component to renderize
const Home = () => {
	return (
		<div>
			<div className="navBar">
				<Navbar/>
			</div>
			<div className="jumbotron">
				<Jumbotron/>
			</div>
			<div className="row">
				<div className="col-sm-3"><Card clase="card h-100 text-white bg-secondary" image={cardImage} title="Título 1" text="Este es el texto de prueba numero 1" label="Pincha Aquí"/></div>
				<div className="col-sm-3"><Card clase="card h-100 text-white bg-success" image={cardImage2} title = "Título 2" text = "Este es el texto de prueba numero 2" label="Pincha en otro"/></div>
				<div className="col-sm-3"><Card clase="card h-100 text-white bg-danger" image={cardImage2} title = "Título 3" text = "Este es el texto de prueba numero 3" label="Pincha en el de al lado"/></div>
				<div className="col-sm-3"><Card clase="card h-100 text-white bg-info" image={cardImage2} title = "Título 4" text = "Este es el texto de prueba numero 4" label="Elígeme"/></div>
			</div>
		</div>
		
	)
};

//export to index.js to renderize
export default Home;
