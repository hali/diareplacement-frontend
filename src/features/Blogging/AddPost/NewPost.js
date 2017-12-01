import React, { Component } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import PostApi from '../../../api/GetPosts'

const Emoticons = (props) => {
    return (
        <div> TODO: Here will emoticons live</div>
    )
}

class NewPost extends Component {
    state = {
        text: 'Стартовый тест',
        topic: 'New Post'
    }

    publish = () => {
        this.setState((state) =>
            ({
                text: '',
                topic: ''
            })
        )
        //Send data to the server
        PostApi.savePost({
            date: '01/12/2017',
            time: '13:02',
            topic: this.state.topic,
            content: this.state.text
        })
        this.props.published('myblog')
    }

    updateForm = (event) => {
        this.setState((state) =>
            ({text: event.target.value})
        )
        event.persist()
    }

    updateTopic = (event) => {
        this.setState((state) =>
            ({topic: event.target.value})
        )
        event.persist()
    }


    render() {
        return (
            <div class='post container-fluid'>                
                <form>
                <label for='topic'>Topic:</label>
                    <input type='text' class="form-control" id='topic' 
                        value={this.state.topic}
                        onChange={this.updateTopic.bind(this)}/>
                    <label for='post'>Post:</label>
                    <textarea  class="form-control" rows='20' id='post' 
                        value={this.state.text} 
                        onChange={this.updateForm.bind(this)}/>
                    <Emoticons />
                </form>
                <br />
                <label forHtml='tags'>@tags</label>
                <form>
                    {this.props.favoriteTags.map((item) => {
                        return (
                            <div class='checkbox-inline'>
                                <label class='checkbox'><input type='checkbox' value='' />{item.name}</label>
                            </div>
                        )
                    })} 
                </form>
                <div class='btn-toolbar'>
                    <button class='btn btn-primary' onClick={this.publish}>Publish</button>
                    <button class='btn'>Preview</button>
                    <button class='btn'>Save as draft</button>
                </div>
                <br />
            </div>
        )
    }
  }
  
  export default NewPost;
  