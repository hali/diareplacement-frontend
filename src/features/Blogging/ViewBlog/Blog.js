import React, { Component } from 'react';
import PostApi from '../../../api/GetPosts'

const BlogPost = (props) => {
    return (
        <div class='row post container-fluid'>
            <div class="row blog-title">
                <div class="col-lg-10"><b>{props.post.topic}</b></div>
                <div class="col-lg-2">{props.post.time}</div>
            </div>
            <div class="row blog-content" dangerouslySetInnerHTML={ {__html: props.post.content}}>
            </div>
        </div>
    )
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
        posts: PostApi.getAllPosts()
    }
    render() {
        let blogDataToRender = []
        let current_date = '';
        for( var i = 0; i < this.state.posts.length; i++){
            if (this.state.posts[i].date !== current_date) {
                blogDataToRender.push(<DateSeparator date={this.state.posts[i].date} />);
                current_date = this.state.posts[i].date;
            }
            blogDataToRender.push(<BlogPost post={this.state.posts[i]}/>);
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
  