import React from 'react';
import Form from './Form';
import Todo from './Todo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      todos: []
    };
    this.updateItem=this.updateItem.bind(this);
    this.addTodo=this.addTodo.bind(this);
    this.deleteTodo=this.deleteTodo.bind(this);
  }

  updateItem(e){
    this.setState({
      item: e.target.value
    });
  }

  addTodo(){
    const newTask = {
      comment: this.state.item
    };
    const newTodo = this.state.todos.slice();
    newTodo.push(newTask);
    this.setState({
      todos: newTodo,
      item: ''
    });
  }
 
  deleteTodo(todo){
    const newTodo = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);

    newTodo.splice(pos,1);
    this.setState({
      todos: newTodo
    });
  }
  
    render(){
        return(
          <div>
            <h1>ToDoリスト</h1>
            <Todo
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
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