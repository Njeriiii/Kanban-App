import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');
const handleChange =  e =>{
    setInput(e.target.value)
}

// prevents constant refresh when you click the 'Add a task' button.
const handleSubmit = e => {
    e.preventDefault();

    // allows access to other components. 
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });
    setInput('');
};
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Add a Task'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
        />
        <button className='todo-button'> Add a task</button>
    </form>
  );
}

export default TodoForm;