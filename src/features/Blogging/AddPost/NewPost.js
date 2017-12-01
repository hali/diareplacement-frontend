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
            <div className='post container-fluid'>                
                <form>
                <label forhtml='topic'>Topic:</label>
                    <input type='text' className="form-control" id='topic' 
                        value={this.state.topic}
                        onChange={this.updateTopic.bind(this)}/>
                    <label forhtml='post'>Post:</label>
                    <textarea  className="form-control" rows='20' id='post' 
                        value={this.state.text} 
                        onChange={this.updateForm.bind(this)}/>
                    <Emoticons />
                </form>
                <br />
                <label forhtml='tags'>@tags</label>
                <form>
                    {this.props.favoriteTags.map((item) => {
                        return (
                            <div className='checkbox-inline'>
                                <label className='checkbox'><input type='checkbox' value='' />{item.name}</label>
                            </div>
                        )
                    })} 
                </form>
                <div className='btn-toolbar'>
                    <button className='btn btn-primary' onClick={this.publish}>Publish</button>
                    <button className='btn'>Preview</button>
                    <button className='btn'>Save as draft</button>
                </div>
                <br />
            </div>
        )
    }
  }
  
  export default NewPost;
  