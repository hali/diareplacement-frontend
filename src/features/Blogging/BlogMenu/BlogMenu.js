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
        {name:"Main", url:"http://ya.ru"},
        {name:"Blog", url:"http://ya.ru"},
        {name:"Add a post", url:"http://ya.ru"},
        {name:"User Profile", url: "http://ya.ru"}
    ];

    
    render() {
        return (
            <div class="menu">
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
  