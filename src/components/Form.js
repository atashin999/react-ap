import React from 'react';

class Form extends React.Component {
      render(){
          return(
            <div>
              <h2>新規タスクの追加</h2>
              <form onSubmit={this.props.addTodo}>
                <input type="text" value={this.props.item} onChange={this.props.updateItem} name="フォーム"/>
                <input type="submit" value="追加" name="追加ボタン"/>
              </form>
            </div>
          );
      }
  }
export default Form;