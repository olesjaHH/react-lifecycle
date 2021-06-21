const ToDoItem = (props) => {
    // console.log(props)
    return (
        <div className="to-do-item" style={{ textDecoration: props.data.isDone ? "line-through" : "" }}>
            <input defaultChecked={props.data.isDone} type="checkbox" onClick={() => props.handleCheckbox(props.data.id)} />
            <span>{props.data.toDoText}</span>

            <button onClick={() => props.handleDelete(props.data.id)}>Delete</button>
        </div>
    );
}

export default ToDoItem;