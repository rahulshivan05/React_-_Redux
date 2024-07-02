import Item from './Item';

// {} --> this is destructuring syntax and takes arguments from parent
// item is the argument then write (props.item) or ({item})

const FoodItems = ({ item }) => {
	// Below function gives me the detail of the Click Event which button is clicked
	const handleBuyButton = (event) => {
		console.log(event);
		console.log(` ${item} is clicked`);
	};

	return (
		<>
			<ul className="list-group">
				{item.map((item) => (
					// In below code we can pass the item from parent to child
					<Item
						key={item}
						foodItem={item}
						handleBuyButton={() => console.log(`${item} Bought`)}
					></Item>
				))}
			</ul>
		</>
	);
};

export default FoodItems;
