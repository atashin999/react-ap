import React from 'react';
import TodoItem from './TodoItem';
import Radio from './Radio';

class Todo extends React.Component {
    render(){
        const task = this.props.todos.map((todo,index) => {
            return(
              <TodoItem
                id={index}
                todo={todo}
                key={index}
                deleteTodo={this.props.deleteTodo}
                switchStatus={this.props.switchStatus}
                selectedOption={this.props.selectedOption}
              />
            );
        });
        
        return(
          <div>
            <Radio
              selectedOption={this.props.selectedOption}
              handleOptionChange={this.props.handleOptionChange}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>コメント</th>
                  <th>状態</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {task}
              </tbody>
            </table>
          </div>
        );
    }
}
export default Todo;