import React from 'react';
import './CSS/App.css';

class ListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isCompleted: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({isCompleted: !this.state.isCompleted});
  }
  render() {
    this.state.isCompleted ? this.ListStyle = {textDecoration: "line-through"} : this.ListStyle = {textDecoration:  "none"};
    return (
      <li style={this.ListStyle} onClick={this.handleClick}>{this.props.item}<button  className="ButtonRemove" onClick={this.props.removeItem}>Delete Item</button></li>
    )
  }
}

export default ListItem;
