import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import './App.css';

// Starting project from here
function App() {
	const todoItems = [
		{
			name: 'Buy Milk',
			Date: '04/04/2009',
		},
		{
			name: 'Go to GYM',
			Date: '04/05/2009',
		},
		{
			name: 'See Porn Video',
			Date: '04/05/2002',
		},
	];

	return (
		<center className="todo_container">
			<AppName /> {/*this is a component of ReactJs */}
			<AddTodo />
			<TodoItems todoItems={todoItems} />
		</center>
	);
}

export default App;
