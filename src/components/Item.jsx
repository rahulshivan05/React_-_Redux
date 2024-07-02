// In here we can catch the data from parent
// React un sebi ko combine karke (props) bana deta hai

import styles from './item.module.css';

// hum props ka saath saath behaviour bhi pass kar sakhte hai

const Item = ({ foodItem, handleBuyButton }) => {
	// let { foodItem } = props; // sedtructuring the data from array
	// Hamena JS study karte samay de-structing sekha hai

	// console.log(styles);

	return (
		<li className={` ${styles.kg_item} list-group-item`}>
			{/* <span className="kg_span">{foodItem}</span> */}
			<span className={styles.kg_span}>{foodItem}</span>

			<button
				className={` ${styles.kg_button} btn btn-primary`}
				onClick={handleBuyButton}
			>
				Buy
			</button>
		</li>
	);
};

export default Item;

/**
 * Jab hum onlick call kar rahe hai tab hum 2 tarike se call kar sakhte hai:
 * 1. onClick={() => handleBuyButton(foodItem)}
 * 2. onClick={handleBuyButton} --> yaha par hum handleBuyButton() function ka refrence pass kar rahe hai Anoyomus
 */
