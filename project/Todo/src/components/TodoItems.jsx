import TodoItem from './TodoItem';

const TodoItems = ({ todoItems }) => {
	return (
		// jab bhi array ka item banana padha hai tab hame map() ka use karna padha hai
		<>
			<div className="items_container">
				{todoItems.map((item) => (
					<TodoItem key={item.name} todoName={item.name} todoDate={item.Date} />
				))}

				{/* <TodoItem todoName={} todoDate={} ></TodoItem> */}
			</div>
		</>
	);
};

export default TodoItems;
