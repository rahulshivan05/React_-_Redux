/**
 * Passing data via props -> (Properties)
 */

import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
	// let foodItems = [];
	let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk'];

	return (
		<>
			<h1>Healthy Food</h1>
			<ErrorMessage item={foodItems}></ErrorMessage>
			<FoodItems item={foodItems}></FoodItems>
		</>
	);
}

export default App;
