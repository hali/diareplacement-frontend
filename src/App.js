import React, { Component } from 'react';
import './App.css';
import Blog from './features/Blogging/ViewBlog/Blog';
import BlogMenu from './features/Blogging/BlogMenu/BlogMenu';
import UserInfoBlock from './features/Blogging/BlogMenu/UserInfoBlock'
import NewPost from './features/Blogging/AddPost/NewPost'
import {Col, Grid, Row} from 'react-bootstrap';

class App extends Component {
  state = {
    context: 'newpost',
    favoriteTags: [
      {id: 1, name: 'Star Trek'},
      {id: 2, name: 'мысли вслух'}
    ]
  }

  updateContext = (newContext) => {
    this.setState((state) => ({context: newContext}))
  }

  render() {
    let content
    if (this.state.context === 'newpost') {
      content = <NewPost favoriteTags={this.state.favoriteTags} published={this.updateContext}/>
    }
    else if (this.state.context === 'myblog') {
      content = <Blog />
    }

    return (
      <div class='container-fluid'>
      <Grid fluid='true'>
        <Row className="show-grid is-table-row">
            <Col  sm={12} md={2} lg={2}>
              <UserInfoBlock />
              <BlogMenu />
            </Col>
            <Col  sm={12} md={10} lg={10}>{content}</Col>
        </Row>
      </Grid></div>
    );
  }
}

export default App;
