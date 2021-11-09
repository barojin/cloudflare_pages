import './App.css';
import React, {Component} from 'react'
import PostForm from './components/PostForm'
import Table from './components/Table'

class App extends Component{
  state = {
    posts: [],
    url: "https://workers.barojins.workers.dev/"
  }  
  getPost = async () => {
    try{
      // const url = "http://127.0.0.1:8787";      
      const reprensentation = await fetch(this.state.url)
      const data = await reprensentation.json()
      console.log("getPost data.posts", data.posts)
      this.setState({        
        posts: [...this.state.posts, ...data.posts]
      })
    } catch(e) {
      console.log("getPost errer", e);
    }
    
  }

  componentDidMount(){
    // fetch data    
    this.getPost()
  }
  
  putPost = async data => {
    try{
      // const url = "http://127.0.0.1:8787";
      await fetch(this.state.url, {
      method: "PUT",
      body: JSON.stringify({ posts: this.state.posts}),
      headers: { 'Content-type': 'application/json'}
    })} catch(e){
      console.log("putPost error", e);
    }  
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
    this.putPost()
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
