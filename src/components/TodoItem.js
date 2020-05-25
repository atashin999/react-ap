import React from 'react';

class TodoItem extends React.Component {
    render(){
        return(
          <tr key={this.props.todo.id}>
            <td>
              {this.props.todo.id} 
            </td>
            <td>
              {this.props.todo.comment}
            </td>
            <td>
              <button type="submit" name="状態変更ボタン">作業中</button>
            </td>
            <td>
              <button type="submit" name="削除ボタン">削除</button>
            </td>
          </tr>
        );
    }
}
export default TodoItem;