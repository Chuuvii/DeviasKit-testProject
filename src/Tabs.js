import './Tabs.css';
import React from 'react'

function Tabs() {
    return(
      <div className="Top">
          <ul className="Tabs">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Price Plans</a></li>
          </ul>
        </div>
    );
  }
  
export default Tabs;