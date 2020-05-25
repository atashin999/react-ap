import React from 'react';

class Form extends React.Component {
      render(){
          return(
            <div>
              <h2>新規タスクの追加</h2>
              <input type="text" value={this.props.item} onChange={this.props.updateItem} name="フォーム"/>
              <button onClick={this.props.addTodo} type="submit" name="追加ボタン">追加</button>
            </div>
          );
      }
  }
export default Form;