import React, { Component } from 'react';


class UserInfoBlock extends Component {
    userinfo = {
        username: 'Hali',
        userprofileurl: '/UserProfile?userid=1',
        blogname: 'Иллюзии',
        blogurl: '/Blog?blogid=hali',
        userpic: 'http://static.diary.ru/userdir/2/3/0/0/23004/thumb/37561538.jpg'
    }
    render () {
        return (
            <div className='userinfoblock'> 
                <a href={this.userinfo.blogurl}>{this.userinfo.blogname}</a><br />
                <img src={this.userinfo.userpic} alt='userpic'/><br />
                <a href={this.userinfo.userprofileurl}>{this.userinfo.username}</a>
            </div>
        )
    }
}

export default UserInfoBlock;