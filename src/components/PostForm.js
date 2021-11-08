import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        title: '',
        content: '',
    }

    state = this.initialState
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
      }
    render() {
        const { title, content } = this.state;

        return (
        <form>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange} />
            
            <label htmlFor="content">Content</label>            
            <textarea            
            name="content"
            id="content"
            value={content}
            onChange={this.handleChange} />
            
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
        );
    }
}

export default Form;