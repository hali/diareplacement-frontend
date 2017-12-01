import React, { Component } from 'react';

const MenuItem = (props) => {
    return (
        <div>
            <a href={props.url}>{props.name}</a>
        </div>
    )
}

class BlogMenu extends Component {

    menuItems = [
        {name: 'Main', url:'main'},
        {name: 'Blog', url: 'myblog'},
        {name: 'Add a post', url: 'newpost'},
        {name: 'User Profile', url: 'userprofile'}
    ];

    
    render() {
        return (
            <div className='menu'>
                <h2>Menu</h2>
                <ul >
                    {this.menuItems.map((item) => {
                        return (
                            <li><MenuItem name={item.name} url={item.url}/></li>
                        )
                    })}            
                 </ul>
                 <br />
            </div>
        )
    }
  }
  
  export default BlogMenu;
  