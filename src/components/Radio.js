import React from 'react';

class Radio extends React.Component {
      render(){
          return(
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="option1"
                  checked={this.props.selectedOption === 'option1'}
                  onChange={this.props.handleOptionChange}
                />すべて
              </label>
              <label>
                <input 
                  type="radio" 
                  value="option2"
                  checked={this.props.selectedOption === 'option2'}
                  onChange={this.props.handleOptionChange}
                />作業中
              </label>
              <label>
                <input 
                  type="radio" 
                  value="option3"
                  checked={this.props.selectedOption === 'option3'}
                  onChange={this.props.handleOptionChange}
                />完了
              </label>
            </div>
          );
      }
  }
export default Radio;