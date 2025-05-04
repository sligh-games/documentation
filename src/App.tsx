import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Array<{ id: string; content: string }>>([]);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      const newTodo = { 
        id: Date.now().toString(), 
        content 
      };
      setTodos([...todos, newTodo]);
    }
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted on GitHub Pages.
        <br />
        <p>This is a simplified version without Amplify backend integration.</p>
      </div>
    </main>
  );
}

export default App;
