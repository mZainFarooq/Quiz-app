import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Quiz from './pages/Quiz';

const TodoApp = () => {
  const [todo, settodo] = useState<string>('');
  const [todoList, settodoList] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      settodoList([...todoList , todo]);
      settodo('');
    }
  };

  const handleDeleteTodo = (index:any) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    settodoList(newList);
  };

  const handleEditTodo = (index:any) => {
    const editedTodo = prompt('Edit the todo:', todoList[index]);
    if (editedTodo !== null) {
      const newList = [...todoList];
      newList[index] = editedTodo;
      settodoList(newList);
    }
  };

  return (
    <div>
      <h1>To Do App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todoList.map((todo, index) => (
          <p key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
          </p>
        ))}
      </div>
    </div>
  );
};

const FormHandling = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e:any) => {
    e.preventDefault();
    let userDetails = {
      name,
      email,
      password,
    };
    setName('');
    setEmail('');
    setPassword('');
    console.log(userDetails);
  };

  return (
    <div>
      <h1>Form Handling</h1>
      <form action="" onSubmit={(e) => submit(e)}>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password:</p>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const styleObj={
    backgroundColor:"gray",
  }
  const btnClick=(e:any)=>{
    console.log(e)
  }
  return (
    <>
      {/* <TodoApp />
      <FormHandling />
      <Input onchange={(e:any)=>{
        console.log(e.target.value)
      }}/>
      <Button btnClick={btnClick} className={styleObj} value="Login"/> */}
      <Quiz/>
    </>
  );
};

export default App;
