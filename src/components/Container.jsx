import styles from './container.module.css';

// Passing children to a component of the React
const Container = ({ children }) => {
	return (
		<>
			<div className={styles.container}>{children}</div>
		</>
	);
};

export default Container;
