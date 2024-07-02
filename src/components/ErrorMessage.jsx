const ErrorMessage = ({ item }) => {
	return <>{item.length == 0 && <h3>I'm still hungry</h3>}</>;
};

export default ErrorMessage;

// props hamasa parent to child flow karta hai
