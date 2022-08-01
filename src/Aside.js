import './Aside.css';
import React from 'react'
import ReactDOM from 'react-dom'


import avatar from './images/avatar.png';
import line from './images/line.png';
import dashboard from './icons/navigation/dashboard.svg';
import users from './icons/navigation/users.svg';
import products from './icons/navigation/products.svg';
import authentication from './icons/navigation/authentication.svg';
import typography from './icons/navigation/typography.svg';
import icons_img from './icons/navigation/icons_img.svg';
import support from './icons/navigation/support.svg';

function Aside(){
    return(
      <aside className="Navigation">
            <div className="UserName">
              <p>Roman Kutepov</p>
              
              <div className="Post">
              <p>Brain Director</p>
              </div>
            </div>
            
            <img src={avatar} alt="Avatar" class="avatar"/>
            
            <img className ="First-Line" src={line} alt="diving line"/>
              <ul className="Nav-text">
                <li><img src={dashboard} alt="Dashboard"/><a href="#">Dashboard</a></li>
                <li><img src={users} alt="users"/><a href="#">Users</a></li>
                <li><img src={products} alt="Products"/><a href="#">Products</a></li>
                <li><img src={authentication} alt="Authentication"/><a href="#">Authentication</a></li>
                <li><img src={typography} alt="Typography"/><a href="#">Typography</a></li>
                <li><img src={icons_img} alt="Icons & Images"/><a href="#">Icons & Images</a></li>
              </ul>
              <div className="aside-support">
                <img className ="Second-Line" src={line} alt="diving line"/>
                <p>Support</p>
                <ul className="Support">
                <li><img src={support} alt="question mark"/><a href="#">Support</a></li>
                </ul>
              </div>
        </aside>
    );
  }
  export default Aside;