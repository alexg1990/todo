import React from 'react';
import ListItem from './ListItem'
import './CSS/App.css';

const Center = {
  textAlign: "center",
  margin: "0 auto"
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
      toDoList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value})
  }
  addItem(event) {
    event.preventDefault();
    this.setState(state => (state.input !== '' && !state.toDoList.includes(state.input) && {toDoList: [...state.toDoList, state.input]}));
  }
  removeItem(item, event) {
    event.preventDefault();
    this.setState(state => ({toDoList: state.toDoList.filter(el => el !== item)}));
  }
  render() {
    const toDoList = this.state.toDoList.map(item => <ListItem key={item} item={item} removeItem={this.removeItem.bind(this, item)}/>);
    return (
      <div style={Center}>
        <h1>Create your own ToDo-List</h1>
        <form>
          <input onChange={this.handleChange}>
          </input>
          <button className="ButtonSubmit" onClick={this.addItem} type="submit">Add Item</button>
          <ul style={{listStyleType:"none"}}>
            {toDoList}
          </ul>
        </form>
      </div>
    )
  }
}

export default App;
