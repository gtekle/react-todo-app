// css styles module
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {completed, id, title } = props.todo;
  
  return (
    <li className={styles.item}>
      <div onDoubleClick={props.handleEditing} style={props.viewMode}>
        <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)} />
        <button onClick={() => props.deleteTodoProps(id)} >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input 
        type="text" 
        style={props.editMode}
        value={title}
        className={styles.textInput} 
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={props.handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;