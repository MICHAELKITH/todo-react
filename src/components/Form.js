import React from 'react';

function Form({
  inputText, setInputText, todos, setTodos,
}) {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    inputText
    && setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa fa-plus-square" />
      </button>
    </form>
  );
}


export default Form;
