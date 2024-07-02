/**
 * Passing data via props -> (Properties)
 */

import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
	// let foodItems = [];
	let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk'];

	const hanleOnChange = (event) => {
		console.log(event.target.value);
	};

	return (
		<>
			<Container>
				<h1 className="food_heading">Healthy Food</h1>
				<ErrorMessage item={foodItems}></ErrorMessage>
				<FoodInput hanleOnChange={hanleOnChange} />
				<FoodItems item={foodItems}></FoodItems>
			</Container>
			{/* <Container>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet modi,
					sed dolor fugit quo harum perspiciatis voluptas ex excepturi aliquam.
					Iusto qui dolores exercitationem tempore dolorem obcaecati neque velit
					cumque?
				</p>
			</Container> */}
		</>
	);
}

export default App;
