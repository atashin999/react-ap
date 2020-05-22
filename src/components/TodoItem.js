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
              <input type="submit" value="作業中" name="状態変更ボタン"/>
            </td>
            <td>
              <input type="submit" value="削除" name="削除ボタン"/>
            </td>
          </tr>
        );
    }
}
export default TodoItem;