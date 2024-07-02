import styles from './foodInput.module.css';

const FoodInput = ({ hanleOnChange }) => {
	// Hamesa function ko HTML na banaye uske badle me alag se function ko banai
	return (
		<input
			type="text"
			placeholder="Enter food item here.."
			className={styles.foodInput}
			onChange={hanleOnChange}
		/>
	);
};

export default FoodInput;
