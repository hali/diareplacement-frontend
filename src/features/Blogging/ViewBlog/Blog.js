import React, { Component } from 'react';
import PostApi from '../../../api/GetPosts'

class BlogPost extends Component {

    deletePost = () => {
        PostApi.deletePost(this.props.post.id);
        this.props.refresh()
    }
    render () {
        return (
            <div className='row post container-fluid'>
                <div className="row blog-title">
                    <div className="col-lg-10"><b>{this.props.post.topic}</b></div>
                     <div className="col-lg-1">{this.props.post.time}</div>
                    <div className="col-lg-1"><button className='btn' onClick={this.deletePost}>Delete</button></div>
                </div>
                <div className="row blog-content" dangerouslySetInnerHTML={ {__html: this.props.post.content}} />
            </div>
        )
    }
}

const Epigraph = (props) => {
      return (
          <div class="row epigraph" dangerouslySetInnerHTML={ {__html: props.epigraph} } />        
      );
  }

const DateSeparator = (props) => {
    return (
        <div class="row date-separator"> {props.date} </div>        
    );
}

class Blog extends Component {
    state = {
        epigraph: '<i>Here is an <b>epigraph</b> - an always on top blog post</i>',
        posts: PostApi.getAllPosts(),
        lastRefreshTime: Date.now
    }

    refresh = () => {
        this.setState((state) => ({
        lastRefreshTime: Date.now,
        posts: PostApi.getAllPosts()
        }))
    }

    render() {
        let blogDataToRender = []
        let current_date = '';
        for( var i = 0; i < this.state.posts.length; i++){
            if (this.state.posts[i].date !== current_date) {
                blogDataToRender.push(<DateSeparator date={this.state.posts[i].date} />);
                current_date = this.state.posts[i].date;
            }
            blogDataToRender.push(<BlogPost post={this.state.posts[i]} refresh={this.refresh}/>);
        }
        return (
          <div>
            <Epigraph epigraph={this.state.epigraph}/>
            {blogDataToRender}
          </div>
      );
    }
  }
  
  export default Blog;
  