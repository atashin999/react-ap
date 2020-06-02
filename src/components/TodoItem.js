import React from 'react';

class TodoItem extends React.Component {
    render(){
        return(
          <tr 
            key={this.props.todo.id}
            className={(this.props.selectedOption === 'option2' && this.props.todo.status)
             || (this.props.selectedOption === 'option3' && !this.props.todo.status) ? "hide-todo" : ""}
          >
            <td>
              {this.props.id}
            </td>
            <td>
              {this.props.todo.comment}
            </td>
            <td>
            　<button type="button" name="状態変更ボタン" onClick={() => this.props.switchStatus(this.props.todo)}>{this.props.todo.status ? '完了' : '作業中'}</button>
            </td>
            <td>
              <button type="submit" name="削除ボタン" onClick={() => this.props.deleteTodo(this.props.todo)}>削除</button>
            </td>
          </tr>
        );
    }
}
export default TodoItem;