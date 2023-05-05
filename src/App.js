import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import 'tachyons'
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(robots=> this.setState({robots:robots}))
  }

  onSearch = (e) => {
    this.setState({search : e.target.value})
  }

  render(){
    const filterRobots = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.search.toLowerCase()) )
    if(this.state.robots.length === 0){
      return (
        <h1 className='tc f1'>Loading...</h1>
      )
    } else {
      return (
        <div className='tc'>
          <Header name="RobotFriends" />
          <SearchBox onSearch={this.onSearch} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      )
    }
  }
}

export default App;
