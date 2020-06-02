import React from 'react';
import Form from './Form';
import Todo from './Todo';

// function getUniqueId() {
//   return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      todos: [],
      selectedOption: 'option1'
    };
    this.updateItem=this.updateItem.bind(this);
    this.addTodo=this.addTodo.bind(this);
    this.deleteTodo=this.deleteTodo.bind(this);
    this.switchStatus=this.switchStatus.bind(this);
    this.handleOptionChange=this.handleOptionChange.bind(this);
  }

  updateItem(e){
    this.setState({
      item: e.target.value
    });
  }

  addTodo(){
    const newTask = {
      // id: getUniqueId(),
      comment: this.state.item,
      status: false
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

  switchStatus(todo){
    const task = this.state.todos.slice();

    const pos = this.state.todos.indexOf(todo);

    task[pos].status = !task[pos].status;

    this.setState({
      todos: task
    });
  }

  handleOptionChange(e){
    this.setState({
      selectedOption: e.target.value
    });
  }

    render(){
        return(
          <div>
            <h1>ToDoリスト</h1>
            <Todo
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              switchStatus={this.switchStatus}
              handleOptionChange={this.handleOptionChange}
              selectedOption={this.state.selectedOption}
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