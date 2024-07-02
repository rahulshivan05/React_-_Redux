// In here we can catch the data from parent
// React un sebi ko combine karke (props) bana deta hai

const Item = ({ foodItem }) => {
	// let { foodItem } = props; // sedtructuring the data from array
	// Hamena JS study karte samay de-structing sekha hai

	return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
