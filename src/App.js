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

  putPost = async data => {
    console.log(data, typeof data, " Here");
    const url = "http://127.0.0.1:8787";
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({data}),
      headers: { 'Content-type': 'application/json'}
  })
  return resp.json()
  }

  handleSubmit = (post) => {
    if (post){
      this.setState({
        posts: [...this.state.posts, post]
      })
      this.putPost(post)
    } else {
      console.log("Error handleSubmit")
    }
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
