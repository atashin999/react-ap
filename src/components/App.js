import React from 'react';
import Form from './Form';
import Todo from './Todo';

function getUniqueId(){
  // tr要素数取得
  var counter = document.getElementsByTagName("tr").length - 1;
  return counter;
}
const task = [
]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      todos: task
    };
    this.updateItem=this.updateItem.bind(this);
    this.addTodo=this.addTodo.bind(this);
  }

  updateItem(e){
    this.setState({
      item: e.target.value
    });
  }

  addTodo(e){
    e.preventDefault();

    const newTask = {
      id: getUniqueId(),
      comment: this.state.item
    };

    const newTodo = this.state.todos.slice();
    newTodo.push(newTask);
    this.setState({
      todos: newTodo,
      item: ''
    });
  }
  
    render(){
        return(
          <div>
            <h1>ToDoリスト</h1>
            <Todo
              todos={this.state.todos}
            />
            <Form 
              item={this.state.item}
              updateItem={this.updateItem}
              addTodo={this.addTodo}
            />
          </div>
        );
    }
}

export default App;