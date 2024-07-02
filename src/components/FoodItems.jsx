import Item from './Item';

// {} --> this is destructuring syntax and takes arguments from parent
// item is the argument then write (props.item) or ({item})

const FoodItems = ({ item }) => {
	return (
		<>
			<ul className="list-group">
				{item.map((item) => (
					// In below code we can pass the item from parent to child
					<Item key={item} foodItem={item}></Item>
				))}
			</ul>
		</>
	);
};

export default FoodItems;
