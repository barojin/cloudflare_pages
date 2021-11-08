import './App.css';
import React, {Component} from 'react'
import PostForm from './components/PostForm'
import Table from './components/Table'

class App extends Component{
  state = {
    posts: []
  }

  componentDidMount(){
    // fetch data
  }

  handleSubmit = (post) => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  removePost = (index) => {
    const {posts} = this.state
    this.setState({
      posts: posts.filter((post, i) => {
        return i !== index
      }),
    })
  }

  render(){
    const {posts} = this.state
    return (
      <div className="App">
        <h1>Barojin</h1>
        <PostForm handleSubmit={this.handleSubmit} />
        <Table posts={posts} removePost={this.removePost} />
      </div>

    )
  }
}

export default App;
