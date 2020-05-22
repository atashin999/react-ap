import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {
    render(){
        const task = this.props.todos.map((todo,index) => {
            return(
              <TodoItem
                id={todo.id}
                todo={todo}
                key={index}
              />
            );
        });
        return(
          <div>
            <input type="radio" name="すべて"/>すべて
            <input type="radio" name="作業中"/>作業中
            <input type="radio" name="完了"/>完了
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