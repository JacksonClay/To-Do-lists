function App() {
  const [todos,setTodos] = React.useState([
      {
       text: 'Learn React',
       isCompleted: false,
      },
      {
        text: 'Meet Friend for Lunch',
        isCompleted: false,
      },
      {
        text: 'Build ToDo App',
        isCompleted: false,        
      }
      ]);
  return (<div>
      {todos.map((todo,i) => <div key={i}>{todo.text}</div>)}
  </div>);
}
  ReactDOM.render(
  <App/>,
  document.getElementById('root')
);